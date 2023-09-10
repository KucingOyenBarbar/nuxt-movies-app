<template>
  <section class="movie-section position-relative py-5">
    <div class="container">
      <div class="row justify-content-center g-2">
        <div class="col-12 col-lg-10">
          <NuxtLink :to="`/movie`" :aria-label="`Kembali kehalaman sebelumnya`" :title="'Kembali kehalaman sebelumnya'"
            class="link-offset-2 link-underline link-underline-opacity-0 link-secondary text-start fst-normal fs-5">
            <BootstrapIcon name="arrow-left" /> Kembali
          </NuxtLink>
          <hr class="text-secondary" />
          <div class="row justify-content-arround g-2 py-3 mb-3">
            <div class="col-sm-4">
              <div>
                <NuxtImg :src="movie.posterImg" :alt="movie.title" :width="300" :height="300"
                  class="figure-img img-fluid rounded " loading="lazy" :quality="75" />
              </div>
            </div>
            <div class="col-sm-8">
              <div class="vstack g-2 position-relative">
                <MoviesMovieHeadingTitle :title="movie.title" />
                <div class="d-flex flex-wrap">
                  <span class="text-white-50 text-start fst-normal me-3 " style="font-size: 14px;">
                    <BootstrapIcon name="clock-fill" /> {{ movie.releaseDate }}
                  </span>
                  <span class="text-white-50 text-start fst-normal me-3 " style="font-size: 14px;">
                    <BootstrapIcon name="tag-fill" /> {{ movie.type }}
                  </span>
                  <span class="text-white-50 text-start fst-normal me-3 " style="font-size: 14px;">
                    <BootstrapIcon name="play-circle-fill" /> {{ movie.duration }}
                  </span>
                  <span class="text-white-50 text-start fst-normal me-3 " style="font-size: 14px;">
                    <BootstrapIcon name="badge-hd" /> {{ movie.quality }}

                  </span>
                </div>
                <div class="py-3">
                  <button v-for="genre in movie.genres" :key="genre" type="button"
                    class="btn btn-dark btn-sm rounded-pill text-center text-white-50 me-2">{{ genre }}</button>
                </div>
                <div class="py-3 text-white-50" v-html="movie.synopsis"></div>
                <MoviesMovieButton @trailer="movieTrailer" @playing="playingMovie" />
              </div>

            </div>
          </div>

          <MoviesVideosMovieVideo :isMovieTrailer="isMovieTrailer" :isMoviePlaying="isMoviePlaying" :movie="movie"
            :streams="streams" />


          <div class="row justify-content-start g-2 py-5">
            <div class="col">
              <div class="d-flex justify-content-between mb-2">
                <MoviesMovieHeadingTitle title="Film Terbaru" />
                <MoviesMovieLink :title="'Selengkapnya'" :links="'/movie/recent-release'">
                  <BootstrapIcon name="chevron-right" class="ms-1" />
                </MoviesMovieLink>
              </div>
              <div v-show="!error"
                class="row justify-content-start row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-3 pt-3">
                <div class="col" v-for="movie in latestMovies?.slice(0, 6)" :key="movie._id">
                  <MoviesMovieItem :movieId="movie._id" :title="movie.title" :featuredImageUrl="movie.posterImg" />
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-start g-2 py-3">
            <div class="col">
              <div class="d-flex justify-content-between mb-2">
                <MoviesMovieHeadingTitle title="Film Rating Teratas" />
                <MoviesMovieLink :title="'Selengkapnya'" :links="'/movie/top-rated'">
                  <BootstrapIcon name="chevron-right" class="ms-1" />
                </MoviesMovieLink>
              </div>
              <div v-show="topMoviesError">
                {{ topMoviesError?.statusCode }} <br />
                {{ topMoviesError?.stack }}
              </div>
              <div v-show="!topMoviesError"
                class="row justify-content-start row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-3 pt-3">
                <div class="col" v-for="movie in topMovies?.slice(0, 6)" :key="movie._id">
                  <MoviesMovieItem :movieId="movie._id" :title="movie.title" :featuredImageUrl="movie.posterImg" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { API } from "~/utils/config/api"
import { RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute()
const { apiBaseUrl } = useConfig()
const movieId = route.params.movieId.toString()

const { data: movie, error, pending } = await useAsyncData<Movies>(`/movies/${movieId}`, () => $fetch(`${apiBaseUrl}/movies/${movieId}`))

const { data: streams } = await useAsyncData<GetStreams[]>(`/movies/${movieId}/streams`, () => $fetch(`/movies/${movieId}/streams`, {
  baseURL: apiBaseUrl
}))

const isMovieTrailer = ref<boolean>(true)
const isMoviePlaying = ref<boolean>(false)

const movieTrailer = (value: boolean) => {
  isMovieTrailer.value = value
  isMoviePlaying.value = false
}
const playingMovie = (value: boolean) => {
  isMoviePlaying.value = value
  isMovieTrailer.value = false
}

useSeoMeta({
  title: movie.value.title,
  ogTitle: movie.value.title,
  description: `${movie.value.synopsis.substring(0, 20)}`,
  ogDescription: `${movie.value.synopsis.substring(0, 20)}`,
})

const { data: movies } = await useFetchDataMovie({ baseUrl: API, endpoint: 'movies', pageParams: 1 })

const { data: latestMovies } = await useFetchDataMovie({ baseUrl: API, endpoint: 'movies', pageParams: 1 })
const { data: topMovies, error: topMoviesError } = await useFetchDataMovie({ baseUrl: API, endpoint: 'top-rated/movies', pageParams: 1 })


</script> 

<style >
.nm-card-items {
  width: 100%;
  height: auto;
  background-color: #111111;
}
</style>
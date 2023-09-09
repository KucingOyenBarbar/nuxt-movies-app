<template>
  <!-- <NuxtLayout name="custom-movies"> -->
  <section>
    <NuxtLink :to="`/movie`" :aria-label="`Kembali kehalaman sebelumnya`" :title="'Kembali kehalaman sebelumnya'"
      class="link-offset-2 link-underline link-underline-opacity-0 link-secondary text-start fst-normal fs-5">
      <BootstrapIcon name="arrow-left" /> Kembali
    </NuxtLink>
    <hr class="text-secondary" />
    <div class="row justify-content-start g-2">
      <div class="col-12 col-lg-3 ">
        <NuxtImg :src="movie.posterImg" :alt="movie.title" :width="250" :height="250"
          class="figure-img img-fluid rounded " format="webp" :quality="75" />
        <figcaption>
          <div>
            <div class="hstack gap-2">
              <BootstrapIcon name="star-fill" style="color: orange;" /> {{ movie.rating }}
              <BootstrapIcon name="badge-hd" /> {{ movie.quality }}
            </div>
          </div>
          <div v-html="movie.title" class="mb-2"></div>
          <MoviesMovieButton @trailer="movieTrailer" @playing="playingMovie" />
        </figcaption>
      </div>
      <div class="col-12 col-lg-9">
        <div class="vstack gap-2">
          <MoviesVideosMovieVideo :isMovieTrailer="isMovieTrailer" :isMoviePlaying="isMoviePlaying" :movie="movie"
            :streams="streams" />

          <div class="row justify-content-start g-2">
            <div class="col">
              <div class="card mb-3 rounded-0 nm-card-items">
                <div class="card-body">
                  <div class="d-flex justify-content-between g-2">
                    <h5 class="card-title text-start text-capitalize fst-medium  text-white">Deskripsi Film
                    </h5>
                    <NuxtLink target="_blank" rel="noopener" :to="`https://dl.lk21static.xyz/get/${movieId}`"
                      :aria-label="`Unduh Langsung Film Ini`" :title="'Unduh Langsung Film Ini'"
                      class="link-offset-2 link-underline link-underline-opacity-0 text-white text-start fst-normal">
                      <BootstrapIcon name="download" />
                    </NuxtLink>
                  </div>
                  <hr class="text-secondary" />
                  <div class="row">
                    <div class="col-sm-12 col-md-8">
                      <div class="row pt-2">
                        <div class="col-3">
                          <p class="text-white-50 text-start">Nama Film</p>
                          <p class="text-white-50 text-start">Kualitas</p>
                          <p class="text-white-50 text-start">Asal Negara</p>
                          <p class="text-white-50 text-start">Sutradara</p>
                          <p class="text-white-50 text-start">Bintang Film</p>
                          <p class="text-white-50 text-start">Genres</p>
                          <p class="text-white-50 text-start">Diterbitkan</p>
                          <p class="text-white-50 text-start">Sinopsis</p>
                        </div>
                        <div class="col">
                          <p class="text-white-50 text-start text-capitalize fst-normal">: {{ movie.title }}</p>
                          <p class="text-white-50 text-start text-capitalize fst-normal">: {{ movie.quality }}</p>
                          <p class="text-white-50 text-start text-capitalize fst-normal">: {{
                            JSON.stringify(movie.countries) }}
                          </p>
                          <p class="text-white-50 text-start text-capitalize fst-normal">: {{
                            JSON.stringify(movie.directors) }}
                          </p>
                          <p class="text-white-50 text-start text-capitalize fst-normal">: {{ JSON.stringify(movie.casts)
                          }}
                          </p>
                          <p class="text-white-50 text-start text-capitalize fst-normal">: {{ JSON.stringify(movie.genres)
                          }}
                          </p>
                          <p class="text-white-50 text-start text-capitalize fst-normal">: {{ movie.releaseDate }}
                          </p>
                          <p v-html="movie.synopsis" class="text-white-50"></p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>


  <!-- </NuxtLayout> -->
</template>

<script lang="ts" setup>
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


</script> 

<style >
.nm-card-items {
  width: 100%;
  height: auto;
  background-color: #111111;
}
</style>
<template>
  <div class="container">
    <section class="movie-home-section position-relative py-5">
      <!-- Section Movie Item -->
      <div class="row justify-content-start g-2 py-5">
        <div class="col">
          <div class="d-flex justify-content-between mb-2">
            <MoviesMovieHeadingTitle title="Film Terbaru" />
            <MoviesMovieLink :title="'Selengkapnya'" :links="'/movie/recent-release'">
              <BootstrapIcon name="chevron-right" class="ms-1" />
            </MoviesMovieLink>
          </div>
          <div v-show="error">
            {{ error?.statusCode }} <br />
            {{ error?.stack }}
          </div>
          <div v-show="!error"
            class="row justify-content-start row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-3 pt-3">
            <div class="col" v-for="movie in latestMovies?.slice(0, 6)" :key="movie._id">
              <MoviesMovieItem :movieId="movie._id" :title="movie.title" :featuredImageUrl="movie.posterImg" />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-start g-2 py-5">
        <div class="col">
          <div class="d-flex justify-content-between mb-2">
            <MoviesMovieHeadingTitle title="Film Terpopuler" />
            <MoviesMovieLink :title="'Selengkapnya'" :links="'/movie/popular'">
              <BootstrapIcon name="chevron-right" class="ms-1" />
            </MoviesMovieLink>
          </div>
          <div v-show="popularMoviesError">
            {{ popularMoviesError?.statusCode }} <br />
            {{ popularMoviesError?.stack }}
          </div>
          <div v-show="!popularMoviesError"
            class="row justify-content-start row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-3 pt-3">
            <div class="col" v-for="movie in popularMovies?.slice(0, 6)" :key="movie._id">
              <MoviesMovieItem :movieId="movie._id" :title="movie.title" :featuredImageUrl="movie.posterImg" />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-start g-2 py-5">
        <div class="col">
          <div class="d-flex justify-content-between mb-2">
            <MoviesMovieHeadingTitle title="Film Rating Teratas" />
            <MoviesMovieLink :title="'Selengkapnya'" :links="'/movie/popular'">
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
      <!-- End Section Movie Item -->
    </section>
  </div>
</template>

<script lang="ts" setup>
import { API } from "~/utils/config/api"

useSeoMeta({ title: 'Beranda', ogTitle: "Beranda", description: "" })

const { data: latestMovies, error } = await useFetchDataMovie({ baseUrl: API, endpoint: 'movies', pageParams: 1 })
const { data: popularMovies, error: popularMoviesError } = await useFetchDataMovie({ baseUrl: API, endpoint: 'popular/movies', pageParams: 1 })
const { data: topMovies, error: topMoviesError } = await useFetchDataMovie({ baseUrl: API, endpoint: 'top-rated/movies', pageParams: 1 })


</script>
 
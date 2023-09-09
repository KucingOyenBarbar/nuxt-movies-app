<template>
  <div class="container">
    <section class="movie-section position-relative py-5">
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
            <div class="col" v-for="movie in movies" :key="movie._id">
              <MoviesMovieItem :movieId="movie._id" :title="movie.title" :featuredImageUrl="movie.posterImg" />
            </div>
          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script lang="ts" setup>
import { API } from "~/utils/config/api"

useSeoMeta({
  title: 'Semua Daftar Film Terbaru & Telengkap',
  ogTitle: "Semua Daftar Film Terbaru & Telengkap",
  description: ""
})

const pageParams = ref(1) as globalThis.Ref<number>

const { data: movies, error } = await useFetchDataMovie({ baseUrl: API, endpoint: 'movies', pageParams: pageParams.value })

</script>

<template>
  <div class="container">

    <section class="movie-section position-relative py-5">
      <MoviesMovieHeadingTitle title="Film Rating Teratas" />
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
    </section>

  </div>
</template>

<script lang="ts" setup>
import { API } from "~/utils/config/api"

useSeoMeta({
  title: 'Film Rating Teratas',
  ogTitle: "Film Rating Teratas",
  description: "Semua Daftar Film Teratas Terbaru & Terlengkap"
})

const pageParams = ref(1) as globalThis.Ref<number>

const { data: movies, error } = await useFetchDataMovie({ baseUrl: API, endpoint: 'top-rated/movies', pageParams: pageParams.value })

</script>

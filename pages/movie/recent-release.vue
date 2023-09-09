<template>
  <div class="row justify-content-start g-2">
    <div class="col">
      <MoviesMovieHeadingTitle title="Semua Daftar Film Terbaru & Telengkap" />
      <MoviesMovieItemList :movies="movies" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Recent Release Movie',
  ogTitle: "Recent Release Movie",
  description: ""
})

const { apiBaseUrl } = useConfig()
const { data: movies, pending, error } = useFetch<GetMovies[]>('/recent-release/movies', {
  lazy: true,
  baseURL: apiBaseUrl,
})

</script>


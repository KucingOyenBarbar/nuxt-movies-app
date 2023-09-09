<template>
  <div class="row justify-content-start g-2">
    <div class="col">
      <MoviesMovieHeadingTitle title="Semua Film Dengan Rating Teratas" />
      <MoviesMovieItemList :movies="movies" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Top Movie',
  ogTitle: "Top Movie",
  description: ""
})
const { apiBaseUrl } = useConfig()
const { data: movies, pending, error } = useFetch<GetMovies[]>('/top-rated/movies', {
  lazy: true,
  baseURL: apiBaseUrl,
})

</script>

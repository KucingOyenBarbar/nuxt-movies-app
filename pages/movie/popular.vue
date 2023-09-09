<template>
  <div class="row justify-content-start g-2">
    <div class="col">
      <MoviesMovieHeadingTitle title="Semua Film Populer Saat Ini" />
      <MoviesMovieItemList :movies="movies" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Semua Film Populer Saat Ini',
  ogTitle: "Semua Film Populer Saat Ini",
  description: ""
})

const { apiBaseUrl } = useConfig()

const { data: movies, pending, error } = useFetch<GetMovies[]>('/popular/movies', {
  lazy: true,
  baseURL: apiBaseUrl,
})

</script>


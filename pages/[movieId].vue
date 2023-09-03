<template>
  <div class="container pt-5">

    Detail Movie Id {{ movieId }}

    {{ movie.title }}
  </div>
</template>

<script lang="ts" setup>
const route: RouteLocationNormalizedLoaded = useRoute()
const { apiBaseUrl } = useConfig()
const { movieId } = route.params
const { data: movie, error, pending } = await useAsyncData<Movies>(`/movies/${movieId}`, () => $fetch(`/movies/${movieId}`, {
  baseURL: apiBaseUrl,

}))



useSeoMeta({
  title: movie.value.title,
  ogTitle: movie.value.title,
  description: `${movie.value.synopsis.substring(0, 20)}`,
  ogDescription: `${movie.value.synopsis.substring(0, 20)}`,
})


</script> 
<template>
  <div>
    Halaman Homepage
    <NuxtLink to="/about">Masuk halaman about</NuxtLink>

    {{ JSON.stringify(movies) }}
  </div>
</template>

<script lang="ts" setup>

useSeoMeta({
  title: 'Halaman utama'
})

const { data: movies, pending, error } = await useFetch('/movies', {
  baseURL: 'http://localhost:8080',
  lazy: true,
})

</script>

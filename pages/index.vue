<template>
  <div>
    Halaman Homepage
    <NuxtLink to="/about" class="text-success">Masuk halaman about</NuxtLink>
    <!-- Section Movie -->
    <section class="container-fluid py-5" id="movie-section">
      <div class="container">
        <h3 class="text-start text-capitalize text-dark fst-medium fs-3">
          Film Terbaru
        </h3>

        <hr class="text-dark" />
        <div class="row row-cols-2 row-cols-lg-6 g-2">
          <div class="col" v-for="movie in movies" :key="movie._id">
            <figure class="figure">

              <NuxtImg :src="movie.posterImg" :width="250" :height="250" loading="lazy"
                class="figure-img img-fluid rounded" />

              <figcaption class="figure-caption">A caption for the above image.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <!-- End Section Movie -->

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

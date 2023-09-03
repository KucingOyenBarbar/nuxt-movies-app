<template>
  <section class="container-fluid position-relative pt-5">
    <div class="container">
      <div class="row justify-content-start g-2">
        <div class="col-lg-8">
          <div class="card mb-3 nm-card-items">
            <div class="card-body">
              <h5 class="card-title text-start text-capitalize fst-medium  text-white-50">Semua Daftar Film Terbaru &
                Telengkap</h5>
              <hr class="text-secondary" />

              <div v-show="pending">Memuat..</div>
              <div class="row justify-content-start row-cols-2 row-cols-lg-4 row-cols-sm-3 row-cols-md-4 g-2 pt-3">
                <div class="col" v-for="movie in movies" :key="movie._id">
                  <figure class="figure position-relative">
                    <NuxtImg :src="movie.posterImg" :alt="movie.title" :width="250" :height="250"
                      class="figure-img img-fluid rounded" format="webp" :quality="75" />
                    <figcaption class="figure-caption ">
                      <NuxtLink :to="`/${movie._id}`" :aria-label="`Detail ${movie.title}`" :title="movie.title"
                        class="link-offset-2 link-underline link-underline-opacity-0 link-secondary stretched-link">{{
                          movie.title }}
                      </NuxtLink>

                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>
const { apiBaseUrl } = useConfig()
const { data: movies, pending, error } = useFetch<GetMovies[]>('/movies', {
  lazy: true,
  baseURL: apiBaseUrl,
})

</script>

<style scoped>
.nm-card-items {
  width: 100%;
  height: auto;
  background-color: #111111;
}
</style>
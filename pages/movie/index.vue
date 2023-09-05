<template>
  <div class="row justify-content-start g-2">
    <div class="col">
      <div class="card mb-3 nm-card-items">
        <div class="card-body">
          <h5 class="card-title text-start text-capitalize fst-medium  text-white-50">Semua Daftar Film Terbaru &
            Telengkap</h5>
          <hr class="text-secondary" />

          <div v-show="pending">Memuat..</div>
          <div class="row justify-content-start row-cols-2 row-cols-lg-6 row-cols-sm-3 row-cols-md-4 g-3 pt-3">
            <div class="col" v-for="movie in movies" :key="movie._id">
              <figure class="figure position-relative">
                <NuxtImg :src="movie.posterImg" :alt="movie.title" :width="250" :height="250"
                  class="figure-img img-fluid rounded" format="webp" :quality="75" />
                <figcaption class="figure-caption ">
                  <div class="vstack gap-2 py-1">
                    <div class="d-flex gap-2">
                      <div v-show="movie.rating" class="text-white-50 text-start fst-normal">
                        <BootstrapIcon name="star" /> <span>{{ movie.rating }}</span>
                      </div>
                      <div v-show="movie.qualityResolution" class="text-white-50 text-start fst-normal">
                        <BootstrapIcon v-if="movie.qualityResolution === 'HD'" name="badge-hd" />
                        <BootstrapIcon v-if="movie.qualityResolution === 'SD'" name="badge-sd" />
                      </div>
                    </div>

                    <NuxtLink :to="`/${movie._id}`" :aria-label="`Detail ${movie.title}`" :title="movie.title"
                      class="link-offset-2 link-underline link-underline-opacity-0 text-white-50 text-start fst-normal fs-6 stretched-link">
                      {{ movie.title.length > 50
                        ? `${movie.title.substring(0, 50)}...`
                        : movie.title
                      }}
                    </NuxtLink>
                  </div>

                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { apiBaseUrl } = useConfig()
const { data: movies, pending, error } = useFetch<GetMovies[]>('/movies', {
  lazy: true,
  baseURL: apiBaseUrl,
})

</script>

<style >
.nm-card-items {
  width: 100%;
  height: auto;
  background-color: #111111;
}
</style>
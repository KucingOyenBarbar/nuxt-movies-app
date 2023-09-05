<template>
  <!-- <NuxtLayout name="custom-movies"> -->

  <div class="row justify-content-center g-2">
    <div class="col-12 col-lg-8 col-sm-12">

      <div class="row justify-content-start g-2">
        <div class="col">
          <div class="card rounded-0 mb-3 nm-card-items">
            <div class="card-body">
              <NuxtLink :to="`/movie`" :aria-label="`Kembali kehalaman sebelumnya`"
                :title="'Kembali kehalaman sebelumnya'"
                class="link-offset-2 link-underline link-underline-opacity-0 link-secondary text-start fst-normal fs-5">
                <BootstrapIcon name="arrow-left" /> Kembali
              </NuxtLink>
              <hr class="text-secondary" />

              <MovieButton @trailer="movieTrailer" @playing="playingMovie" @download="downloadMovie" />
              <MovieVideo :isMovieTrailer="isMovieTrailer" :isMoviePlaying="isMoviePlaying" :movie="movie"
                :streams="streams" />
            </div>
          </div>

        </div>
      </div>

      <div class="row justify-content-start g-2">
        <div class="col">
          <div class="card mb-3 rounded-0 nm-card-items">
            <div class="card-body">
              <h5 class="card-title text-start text-capitalize fst-medium  text-white-50">Detail Film: {{ movie.title }}
              </h5>
              <hr class="text-secondary" />
              <div class="row">
                <div class="col-sm-12 col-md-4">
                  <NuxtImg :src="movie.posterImg" :alt="movie.title" :width="250" :height="250"
                    class="figure-img img-fluid rounded" format="webp" :quality="75" />
                </div>
                <div class="col-sm-12 col-md-8">
                  <div class="row pt-2">
                    <div class="col-3">
                      <p class="text-white-50 text-start">Nama Film</p>
                      <p class="text-white-50 text-start">Kualitas</p>
                      <p class="text-white-50 text-start">Asal Negara</p>
                      <p class="text-white-50 text-start">Sutradara</p>
                      <p class="text-white-50 text-start">Bintang Film</p>
                      <p class="text-white-50 text-start">Genres</p>
                      <p class="text-white-50 text-start">Diterbitkan</p>
                      <p class="text-white-50 text-start">Sinopsis</p>
                    </div>
                    <div class="col">
                      <p class="text-white-50 text-start text-capitalize fst-normal">: {{ movie.title }}</p>
                      <p class="text-white-50 text-start text-capitalize fst-normal">: {{ movie.quality }}</p>
                      <p class="text-white-50 text-start text-capitalize fst-normal">: {{
                        JSON.stringify(movie.countries) }}
                      </p>
                      <p class="text-white-50 text-start text-capitalize fst-normal">: {{
                        JSON.stringify(movie.directors) }}
                      </p>
                      <p class="text-white-50 text-start text-capitalize fst-normal">: {{ JSON.stringify(movie.casts) }}
                      </p>
                      <p class="text-white-50 text-start text-capitalize fst-normal">: {{ JSON.stringify(movie.genres)
                      }}
                      </p>
                      <p class="text-white-50 text-start text-capitalize fst-normal">: {{ movie.releaseDate }}
                      </p>
                      <p v-html="movie.synopsis" class="text-white-50"></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- </NuxtLayout> -->
</template>

<script lang="ts" setup>
import MovieButton from '~/components/movies/MovieButton.vue';
import MovieVideo from '~/components/movies/videos/MovieVideo.vue';

const route: RouteLocationNormalizedLoaded = useRoute()
const { apiBaseUrl } = useConfig()
const { movieId } = route.params
const { data: movie, error, pending } = await useAsyncData<Movies>(`/movies/${movieId}`, () => $fetch(`/movies/${movieId}`, {
  baseURL: apiBaseUrl,
}))
const { data: streams } = await useAsyncData<GetStreams[]>(`/movies/${movieId}/streams`, () => $fetch(`/movies/${movieId}/streams`, {
  baseURL: apiBaseUrl
}))

const isMovieTrailer = ref<boolean>(true)
const isMoviePlaying = ref<boolean>(false)
const isMovieDownload = ref<boolean>(false)

const movieTrailer = (value: boolean) => {
  isMovieTrailer.value = value
  isMoviePlaying.value = false
  isMovieDownload.value = false
}
const playingMovie = (value: boolean) => {
  isMoviePlaying.value = value
  isMovieTrailer.value = false
  isMovieDownload.value = false
}
const downloadMovie = (value: boolean) => {
  isMovieDownload.value = value
  isMoviePlaying.value = false
  isMovieTrailer.value = false
}

useSeoMeta({
  title: movie.value.title,
  ogTitle: movie.value.title,
  description: `${movie.value.synopsis.substring(0, 20)}`,
  ogDescription: `${movie.value.synopsis.substring(0, 20)}`,
})


</script> 
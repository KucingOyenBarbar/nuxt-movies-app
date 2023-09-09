<template>
  <div class="row justify-content-start g-3">
    <div class="col">
      <div class="hstack gap-2">
        <button @click="movieTrailer" type="button" :class="`btn btn-sm btn-dark rounded `">
          <BootstrapIcon name="youtube" /> Tonton
          Trailer
        </button>
        <button @click="playingMovie" type="button" :class="`btn btn-sm btn-dark rounded `">
          <BootstrapIcon name="play-circle" />
          Menonton
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['trailer', 'playing'])

// Set initial state
const isMovieTrailer = ref<boolean>(true)
const isMoviePlaying = ref<boolean>(false)

const movieTrailer = () => {
  isMovieTrailer.value = true
  emits('trailer', isMovieTrailer.value)
}

const playingMovie = () => {
  isMoviePlaying.value = true
  emits('playing', isMoviePlaying.value)
}

</script>
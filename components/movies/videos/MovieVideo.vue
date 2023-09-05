<template>
  <div class="row justify-content-start g-3 py-3">
    <div class="col">
      <div class="vstack gap-3 mb-3">
        <MovieVideoTrailer v-if="isMovieTrailer && !isMoviePlaying" :vidio_id="vidio_id" :title="movie.title" />
        <MovieVideoStreaming v-if="isMoviePlaying && !isMovieTrailer" :streams="streams" :title="movie.title" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import MovieVideoStreaming from "./MovieVideoStreaming.vue"
import MovieVideoTrailer from './MovieVideoTrailer.vue';

const props = defineProps({
  isMovieTrailer: { type: Boolean }, isMoviePlaying: { type: Boolean },
  movie: { required: true, type: Object as PropType<Movies> },
  streams: { required: true, type: Object as PropType<GetStreams[]> }
})

let regex: RegExp =
  /(https?:\/\/)?(((m|www)\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i

let vidio_id: string = props.movie.trailerUrl && props.movie.trailerUrl !== ''
  ? props.movie.trailerUrl.toString().match(regex)[8]
  : null
</script>
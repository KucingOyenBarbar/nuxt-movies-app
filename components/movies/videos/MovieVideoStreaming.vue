<template>
  <div>
    <div class="ratio ratio-16x9">
      <iframe :src="`${streams[2].url}`" title="YouTube video player" frameborder="0" :width="500" :height="500"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

    </div>

    <div class="d-flex justify-content-end g-2 pt-3">
      <div class="btn-group">
        <button title=" Klik Untuk Mengganti Sumber Video" type="button" class="btn dropdown-toggle text-white-50"
          data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
          Klik Ganti Sumber Video
        </button>
        <ul class="dropdown-menu dropdown-menu-lg-end">
          <li v-for="(stream, index) in streams" :key="index"><button class="dropdown-item" type="button">{{
            stream.provider }}</button></li>
        </ul>
      </div>

    </div>

    <div class="d-flex flex-wrap pt-3">
      <h5 class="text-white-50 text-uppercase fst-normal">Nonton Film {{ title }}</h5>
    </div>



  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
  title: { type: String },
  vidio_id: { type: String },
  streams: { required: true, type: Object as PropType<GetStreams[]> }
})

</script>
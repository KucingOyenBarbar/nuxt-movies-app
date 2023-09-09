<template>
  <div>
    <div class="d-flex justify-content-end g-2 mb-3">
      <div class="btn-group">
        <button title=" Klik Untuk Mengganti Sumber Video" type="button" class="btn dropdown-toggle text-white-50"
          data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
          Klik Ganti Sumber Video
        </button>
        <ul class="dropdown-menu dropdown-menu-lg-start w-100" data-bs-theme="dark">
          <li v-for="(stream, index) in streams" :key="index">
            <div class="hstack g-2">
              <button @click="onStreamsHandle(stream.url, stream.provider)" class="dropdown-item" type="button">{{
                stream.provider }}
              </button>

              <BootstrapIcon v-show="stream.url === streamUrl" name="play" />

            </div>
          </li>
        </ul>
      </div>

    </div>

    <div class="ratio ratio-16x9">
      <iframe :src="streamUrl" title="YouTube video player" frameborder="0" :width="500" :height="500"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

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

const streamUrl = ref(props.streams[0].url) // set default streams

const onStreamsHandle = (url: string, provider: string) => {
  streamUrl.value = url
  alert('Provider streaming diganti menjadi ' + provider)
}


</script>
<template>
  <div>
    <div class="ratio ratio-16x9">
      <iframe :src="`https://www.youtube.com/embed/${vidio_id}`" title="YouTube video player" frameborder="0" :width="500"
        :height="500"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>

  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  title: { type: String },
  vidio_id: { type: String },
})
</script>
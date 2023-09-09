<template>
  <h1 class='text-start text-white text-wrap text-capitalize fs-3 fst-medium text-white text-capitalize'>
    <span>
      {{ title }}
    </span>
  </h1>
</template>

<script lang="ts" setup>

const props = defineProps({
  title: { type: String }
})
</script>
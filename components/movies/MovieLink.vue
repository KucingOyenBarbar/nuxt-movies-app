<template>
  <div class="hstack g-2">
    <NuxtLink :aria-label="title" :title="title" :to="links"
      :class="'link-offset-2 link-underline link-underline-opacity-0 fs-6 fst-normal text-white text-capitalize text-decoration-none'">
      {{ title }}
    </NuxtLink>

    <slot />

  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String },
  links: { type: String }
})


</script>
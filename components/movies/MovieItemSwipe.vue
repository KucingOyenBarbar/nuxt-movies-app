<template>
  <figure class="figure position-relative">
    <NuxtImg :src="featuredImageUrl" :alt="title" :width="300" :height="300" class="figure-img img-fluid rounded"
      format="webp" :quality="75" />
    <figcaption class="figure-caption ">
      <div class="vstack gap-2 py-1">
        <NuxtLink :to="`/${movieId}`" :aria-label="`Detail ${title}`" :title="title"
          class="link-offset-2 link-underline link-underline-opacity-0 text-white-50 text-start fst-normal fs-6 stretched-link text-decoration-none">
        </NuxtLink>
      </div>

    </figcaption>
  </figure>
</template>

<script lang="ts" setup>

const props = defineProps({
  movieId: { type: String },
  title: { type: String },
  featuredImageUrl: { type: String }
})

</script>
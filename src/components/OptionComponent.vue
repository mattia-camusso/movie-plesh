<template>
  <div class="relative cursor-pointer w-[15vmax] aspect-square">
    <img class="absolute h-full w-full rounded-xl object-cover" :src="img" :alt="title" />
    <div
      class="absolute z-2 text-c-1 text-center text-pretty text-style-3 card-overlay rounded-xl font-semibold h-full w-full grid place-items-center"
    >
      <h3 class="">{{ title }}</h3>
    </div>
  </div>
</template>

<script lang="js" setup>
defineProps({
  title: String,
  img: String
})
</script>

<style></style>

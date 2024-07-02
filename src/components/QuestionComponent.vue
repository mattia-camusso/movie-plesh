<template>
  <div>
    <div class="flex justify-center py-6">
      <h2 class="text-style-1">{{ question }}</h2>
    </div>
    <div class="flex flex-wrap gap-8 md:gap-12 pb-8">
      <OptionComponent
        v-bind:key="option.value"
        @click="$emit('answer', option.value)"
        v-for="option in options"
        :title="option.text"
        :img="option.img"
      ></OptionComponent>
    </div>
  </div>
</template>

<script lang="js" setup>
import OptionComponent from './OptionComponent.vue'
defineProps({
  question: String,
  options: Array,
  nextRoute: String
})
</script>

<style></style>

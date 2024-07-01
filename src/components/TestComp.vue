<template>
  <button @click="getReccomandation()">ESEGUI</button>
  <div v-if="store.title">
    <h1>Titolo: {{ store.title }}</h1>
    <p>Trama:{{ store.description }}</p>
    <p>Anno di uscita: {{ store.releaseYear }}</p>
    <p>Durata:{{ store.runningTime }}</p>
    <p>Cast: {{ store.cast.toString() }}.</p>

    <a
      target="_blank"
      :href="`https://www.youtube.com/results?search_query=${store.titleUrl}+trailer`"
    >
      <button>GUARDA IL TRAILER</button>
    </a>
    <div v-if="store.poster">
      <img :src="store.poster" :alt="store.title" />
    </div>
  </div>
  <h3 v-else>WOMP WOMP</h3>
</template>

<script lang="ts" setup>
import { getReccomandation } from '@/api'
import { useMainStore } from '@/stores/reccomandation'

const store = useMainStore()
</script>

<style></style>

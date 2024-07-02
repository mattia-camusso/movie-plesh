<template>
  <div class="flex flex-col md:flex-row" v-if="store.title">
    <div class="z-2 flex flex-col pr-8 gap-8">
      <h1 class="text-style-1 after:h-1 after:bg-c-4">{{ store.title }}</h1>
      <p class="text-style-3">{{ store.description }}</p>
      <p class="text-style-2">Anno: {{ store.releaseYear }}, Durata: {{ store.runningTime }}</p>
      <p class="text-style-2">Cast: {{ store.cast.toString() }}.</p>

      <div
        class="flex justify-between items-center flex-col md:flex-row gap-1 absolute bottom-8 w-3/4 left-0 right-0 mx-auto nav-items"
      >
        <a
          target="_blank"
          :href="`https://www.youtube.com/results?search_query=${store.titleUrl}+trailer`"
        >
          <button class="text-style-4 nav-item text">Guarda il Trailer</button>
        </a>
        <button
          class="text-style-4 nav-item text"
          @click="
            getReccomandation(
              questions.whatToWatch,
              questions.decade,
              questions.genre,
              questions.mood,
              questions.mpaa,
              store.title
            )
          "
        >
          Altra Raccomandazione
        </button>
        <button class="text-style-4 nav-item text-center" @click="restart()">Ricomincia</button>
      </div>
    </div>
    <div v-if="store.poster">
      <img
        class="h-[35vh] mx-auto max-w-none mt-20 md:mt-0 md:h-full"
        :src="store.poster"
        :alt="store.title"
      />
    </div>
  </div>
  <div v-else>
    <LoaderComponent></LoaderComponent>
  </div>
</template>

<script lang="js" setup>
import { getReccomandation } from '@/api'
import LoaderComponent from '@/components/ui/LoaderComponent.vue'
import { useMainStore } from '@/stores/reccomandation'
import { useQuestionStore } from '@/stores/questions'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  getReccomandation(
    questions.whatToWatch,
    questions.decade,
    questions.genre,
    questions.mood,
    questions.mpaa
  )
})

const router = useRouter()
const store = useMainStore()
const questions = useQuestionStore()

const restart = () => {
  store.reset()
  router.push('/feed')
}
</script>

<style></style>

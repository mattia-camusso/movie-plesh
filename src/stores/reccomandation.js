import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('reccomandation', () => {
  const title = ref('')
  const description = ref('')
  const runningTime = ref('')
  const cast = ref([])
  const releaseYear = ref('')
  const titleUrl = ref('')
  const poster = ref('')
  /*const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  } */

  const addTitle = (recc) => {
    const pattern = /\([^)]*\)/g
    const parsedTitle = recc.replace(pattern, '')
    title.value = parsedTitle
    titleUrl.value = parsedTitle.toLowerCase().replace(' ', '+')
  }
  const addDescription = (recc) => {
    description.value = recc
  }
  const addRunningTime = (recc) => {
    runningTime.value = recc
  }
  const addCast = (recc) => {
    cast.value = recc
  }
  const addReleaseYear = (recc) => {
    releaseYear.value = recc
  }
  const addPoster = (recc) => {
    poster.value = recc
  }

  return {
    addTitle,
    addCast,
    addDescription,
    addRunningTime,
    addReleaseYear,
    addPoster,
    title,
    description,
    cast,
    releaseYear,
    runningTime,
    titleUrl,
    poster
  }
})

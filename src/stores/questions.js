import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useQuestionStore = defineStore('questions', () => {
  const whatToWatch = ref('')
  const decade = ref('')
  const genre = ref('')
  const mood = ref('')
  const mpaa = ref('')

  const setWhatToWatch = (val) => {
    whatToWatch.value = val
  }

  const setDecade = (val) => {
    decade.value = val
  }

  const setGenre = (val) => {
    genre.value = val
  }

  const setMood = (val) => {
    mood.value = val
  }

  const setMPAA = (val) => {
    mpaa.value = val
  }

  const reset = () => {
    ;(whatToWatch.value = ''),
      (decade.value = ''),
      (genre.value = ''),
      (mood.value = ''),
      (mpaa.value = '')
  }

  return {
    whatToWatch,
    decade,
    genre,
    mood,
    mpaa,
    setWhatToWatch,
    setDecade,
    setGenre,
    setMood,
    setMPAA,
    reset
  }
})

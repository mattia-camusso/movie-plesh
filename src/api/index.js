import { model } from '@/main'
import { useMainStore } from '@/stores/reccomandation'

export const getReccomandation = async () => {
  // Provide a prompt that contains text
  const prompt = `Give me a movie to watch based on the following. I like this genre: Horror. I like this decade: '2010s. Current Mood Sad. MPAA Rating PG. Occasion Movie Date. Give me your response in a valid json string, with the following fields: title, description, cast, releaseYear, runningTime, trailerUrl`

  // To generate text output, call generateContent with the text input
  const result = await model.generateContent(prompt)

  const response = result.response
  const text = response.text().trim()
  const reccomandation = JSON.parse(text.slice(7, text.length - 3))
  console.log(reccomandation)
  const store = useMainStore()

  store.addTitle(reccomandation.title)
  store.addRunningTime(reccomandation.runningTime)
  store.addDescription(reccomandation.description)
  store.addCast(reccomandation.cast)
  store.addReleaseYear(reccomandation.releaseYear)

  getMoviePoster()
}

const getMoviePoster = async () => {
  const store = useMainStore()
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_MOVIE_POSTER_TOKEN}&t=${store.titleUrl}&y=${store.releaseYear}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    console.log('=========================================')
    console.log(json)
    console.log('=========================================')
    store.addPoster(json.Poster)
  } catch (error) {
    console.error(error.message)
  }
}

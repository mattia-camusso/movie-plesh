import { model } from '@/main'
import { useMainStore } from '@/stores/reccomandation'

export const getReccomandation = async (
  whatToWatch,
  decade,
  genre,
  mood,
  mpaa,
  movieToAvoid = ''
) => {
  let avoid = ''
  if (movieToAvoid !== '') {
    avoid = `. Don't reccomand this one ${movieToAvoid}`
  }
  // Provide a prompt that contains text
  const prompt = `Give me a ${whatToWatch} to watch based on the following. I like this genre: ${genre}. I like this decade: ${decade}. Current Mood ${mood}. MPAA Rating ${mpaa}${avoid}. Give me your response in a valid json string, with the following fields: title, description, cast, releaseYear, runningTime. Send a reccomandation even if it doesn't fit all the criteria perfectly`
  console.log(prompt)
  //const prompt2 = `Dammi un film da guardare basato su quanto segue. Mi piace questo genere: Horror. Mi piace questo decennio: gli anni 2010. Umore attuale Triste. Valutazione MPAA Rated R. Occasione, film da vedere con il partner. Dammi la tua risposta in una stringa json valida, con i seguenti campi: titolo, descrizione, cast, releaseYear, runningTime, trailerUrl`

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
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_MOVIE_POSTER_TOKEN}&t=${store.titleUrl}&y=${store.releaseYear}`
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

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.scss'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getGenerativeModel, getVertexAI } from 'firebase/vertexai-preview'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'pleshassignment.firebaseapp.com',
  projectId: 'pleshassignment',
  storageBucket: 'pleshassignment.appspot.com',
  messagingSenderId: '1035517284759',
  appId: '1:1035517284759:web:c1b39818506e3caa67f4d2'
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

const vertexAI = getVertexAI(firebaseApp)
export const model = getGenerativeModel(vertexAI, { model: 'gemini-1.5-pro-preview-0409' })

// Wrap in an async function so you can use await
/* export const getReccomandation = async () => {
  // Provide a prompt that contains text
  const prompt = 'What is the capital of sudan?'

  // To generate text output, call generateContent with the text input
  const result = await model.generateContent(prompt)

  const response = result.response
  const text = response.text()
  console.log(text)

  return text
}
 */
// Initialize the generative model with a model that supports your use case
// Gemini 1.5 Pro is versatile and can accept both text-only or multimodal prompt inputs
// eslint-disable-next-line no-unused-vars

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

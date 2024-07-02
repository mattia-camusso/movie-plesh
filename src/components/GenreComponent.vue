<template>
  <QuestionComponent
    :question="genreQuestion.question"
    :options="filteredOptions"
    :next="genreQuestion.nextRoute"
    @answer="(ans) => answerQuestion(ans)"
  ></QuestionComponent>
</template>

<script lang="js" setup>
import { genreQuestion } from '@/constants'
import QuestionComponent from './QuestionComponent.vue'
import { useQuestionStore } from '@/stores/questions'
import { useRouter } from 'vue-router'
const router = useRouter()

const questionStore = useQuestionStore()
let filteredOptions = []
console.log(questionStore.whatToWatch)
if (questionStore.whatToWatch === 'Documentary') {
  filteredOptions = genreQuestion.options.filter((op) => op.type === 'documentary')
} else {
  filteredOptions = genreQuestion.options.filter((op) => op.type !== 'documentary')
}

const answerQuestion = (answer) => {
  questionStore.setGenre(answer)
  console.log(questionStore.genre)
  router.push('/feed/decade')
}
</script>

<style></style>

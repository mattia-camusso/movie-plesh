<template>
  <QuestionComponent
    :question="decadeQuestion.question"
    :options="decadeQuestion.options"
    :next="decadeQuestion.nextRoute"
    @answer="(ans) => answerQuestion(ans)"
  ></QuestionComponent>
</template>

<script lang="js" setup>
import { decadeQuestion } from '@/constants'
import QuestionComponent from './QuestionComponent.vue'
import { useQuestionStore } from '@/stores/questions'
import { useRouter } from 'vue-router'
const router = useRouter()

const questionStore = useQuestionStore()

const answerQuestion = (answer) => {
  questionStore.setDecade(answer)
  console.log(questionStore.decade)
  router.push('/feed/mood')
}
</script>

<style></style>

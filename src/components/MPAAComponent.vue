<template>
  <QuestionComponent
    :question="mpaaQuestion.question"
    :options="mpaaQuestion.options"
    :next="mpaaQuestion.nextRoute"
    @answer="(ans) => answerQuestion(ans)"
  ></QuestionComponent>
</template>

<script lang="js" setup>
import { mpaaQuestion } from '@/constants'
import QuestionComponent from './QuestionComponent.vue'
import { useQuestionStore } from '@/stores/questions'
import { useRouter } from 'vue-router'
const router = useRouter()

const questionStore = useQuestionStore()

const answerQuestion = (answer) => {
  questionStore.setMPAA(answer)
  console.log(questionStore.mpaa)
  router.push('/result')
}
</script>

<style></style>

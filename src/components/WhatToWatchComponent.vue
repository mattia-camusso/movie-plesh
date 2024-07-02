<template>
  <QuestionComponent
    :question="whatToWatchQuestion.question"
    :options="whatToWatchQuestion.options"
    :next="whatToWatchQuestion.nextRoute"
    @answer="(ans) => answerQuestion(ans)"
  ></QuestionComponent>
</template>

<script lang="js" setup>
import { whatToWatchQuestion } from '@/constants'
import QuestionComponent from './QuestionComponent.vue'
import { useQuestionStore } from '@/stores/questions'
import { useRouter } from 'vue-router'
const router = useRouter()

const questionStore = useQuestionStore()

const answerQuestion = (answer) => {
  questionStore.setWhatToWatch(answer)
  console.log(questionStore.whatToWatch)
  router.push('/feed/genre')
}
</script>

<style></style>

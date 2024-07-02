<template>
  <QuestionComponent
    :question="moodQuestion.question"
    :options="moodQuestion.options"
    :next="moodQuestion.nextRoute"
    @answer="(ans) => answerQuestion(ans)"
  ></QuestionComponent>
</template>

<script lang="js" setup>
import { moodQuestion } from '@/constants'
import QuestionComponent from './QuestionComponent.vue'
import { useQuestionStore } from '@/stores/questions'
import { useRouter } from 'vue-router'
const router = useRouter()

const questionStore = useQuestionStore()

const answerQuestion = (answer) => {
  questionStore.setMood(answer)
  console.log(questionStore.mood)
  router.push('/feed/mpaa')
}
</script>

<style></style>

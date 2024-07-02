<template>
  <article>
    <router-view></router-view>
    <!-- <QuestionComponent
      :question="currentQuestion.question"
      :options="currentQuestion.options"
    ></QuestionComponent> -->
    <div v-if="router.currentRoute.value.fullPath === '/feed'">
      <h1 class="text-style-1 text-pretty text-center">
        IL TUO NUOVO <span class="text-c-4">FILM PREFERITO</span> A PORTATA DI CLICK
      </h1>
      <div class="flex flex-col gap-4 md:gap-10 pt-8 md:pt-16">
        <h3 class="text-style-4">
          Sei stanco di cercare per ore un buon film da vedere? Lascia che ti aiutiamo noi!
        </h3>
        <p class="text-style-1 font-semibold">Come Funziona?</p>
        <p class="text-style-4">1) Rispondi a Poche Domande: Inizia subito il nostro quiz.</p>
        <p class="text-style-4">
          2) Ricevi Raccomandazioni Personalizzate: In base alle tue risposte, ti suggeriamo film,
          serie tv e documentari su misura per te.
        </p>
        <p class="text-style-4">3) Goditi il Film</p>
        <button
          @click="router.push('/feed/watch')"
          class="bg-c-4 transition-colors border-2 border-c-4 duration-300 ease-in mx-auto hover:text-c-4 hover:font-normal hover:bg-c-1 px-16 py-3 w-fit mt-12 md:mt-0 rounded-full text-style-3"
        >
          SCOPRI
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()
</script>

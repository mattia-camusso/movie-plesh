<template>
  <div
    class="backdrop-blur-xl flex flex-col gap-8 items-center border-c-3 border-2 rounded-lg w-1/4 min-w-80 p-12"
  >
    <h1 class="text-style-1">Crea un Account</h1>
    <p>
      <input
        type="text"
        v-model="email"
        class="bg-c-1 text-c-3 px-4 py-3 outline-none w-[280px] rounded-lg border-2 transition-colors duration-100 border-solid focus:border-c-3 border-c-1"
        placeholder="Email"
      />
    </p>
    <p>
      <input
        type="password"
        v-model="password"
        class="bg-c-1 text-c-3 px-4 py-3 outline-none w-[280px] rounded-lg border-2 transition-colors duration-100 border-solid focus:border-c-3 border-c-1"
        placeholder="Password"
      />
    </p>
    <button
      @click="register"
      class="bg-c-3 transition-colors border-2 border-c-3 duration-300 ease-in hover:text-c-2 hover:font-normal hover:bg-c-1 px-16 py-3 rounded-full"
    >
      Sign Up
    </button>
    <GoogleSignIn></GoogleSignIn>
    <p class="text-c-4" v-if="errMsg">{{ errMsg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'
import GoogleSignIn from '@/components/GoogleSignIn.vue'

const email = ref()
const password = ref()
const router = useRouter()
const errMsg = ref()

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully Registered', data)
      console.log(getAuth().currentUser)
      router.push('/feed')
    })
    .catch((err) => {
      console.log(err.code)
      switch (err.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break
        default:
          errMsg.value = 'Something went wrong'
          break
      }
    })
}
</script>

<style></style>

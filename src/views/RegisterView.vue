<template>
  <h1>Crea un Account</h1>
  <p><input type="text" v-model="email" placeholder="Email" /></p>
  <p><input type="password" v-model="password" placeholder="Password" /></p>
  <button @click="register">CREA</button>
  <GoogleSignIn></GoogleSignIn>
  <p v-if="errMsg">{{ errMsg }}</p>
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

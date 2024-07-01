<template>
  <h1>Accedi</h1>
  <p><input type="text" v-model="email" placeholder="Email" /></p>
  <p><input type="password" v-model="password" placeholder="Password" /></p>
  <button @click="signIn">Sign In</button>
  <GoogleSignIn></GoogleSignIn>
  <p v-if="errMsg">{{ errMsg }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'
import GoogleSignIn from '@/components/GoogleSignIn.vue'
const email = ref()
const password = ref()
const router = useRouter()
const errMsg = ref()
const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully Signed In', data)
      console.log(getAuth().currentUser)
      router.push('/feed')
    })
    .catch((err) => {
      console.log(err.code)
      switch (err.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
        default:
          errMsg.value = 'Wrong Email or Password'
          break
      }
    })
}
</script>

<style></style>

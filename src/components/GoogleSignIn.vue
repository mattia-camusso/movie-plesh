<template>
  <div class="nav-items">
    <button class="nav-item text-style-2" @click="signInWithGoogle">Accedi con Google</button>
  </div>
</template>

<script lang="js" setup>
import { useRouter } from 'vue-router'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ref } from 'vue'

const router = useRouter()
const errMsg = ref()

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log('Successfully signed in with Google')
      console.log(result.user)
      router.push('/feed')
    })
    .catch((err) => {
      console.log(err.code)
      switch (err.code) {
        case 'auth/account-exists-with-different-credential':
        default:
          errMsg.value = 'Something went wrong'
          break
      }
    })
}
</script>

<style></style>

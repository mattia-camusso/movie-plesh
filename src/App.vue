<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth'

const router = useRouter()
const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>

<template>
  <div class="wrapper border-image md:p-8 p-3">
    <header class="flex justify-between z-3">
      <RouterLink to="/feed" class="md:flex-grow">
        <h1 class="text-serif text-style-big gradient-text text-center">MOVIEGRAM</h1>
      </RouterLink>

      <nav class="flex gap-6 justify-end nav-items">
        <RouterLink class="text-c-1 text-style-2 nav-item" v-if="!isLoggedIn" to="/register"
          >Register</RouterLink
        >
        <RouterLink class="text-c-1 text-style-2 nav-item" v-if="!isLoggedIn" to="/sign-in"
          >Sign In</RouterLink
        >
        <button class="text-c-1 text-style-2 nav-item" v-if="isLoggedIn" @click="handleSignOut">
          Sign Out
        </button>
      </nav>
    </header>
    <main class="grid place-items-center mt-12 md:mt-0">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>

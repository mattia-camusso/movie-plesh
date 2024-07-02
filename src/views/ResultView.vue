<template>
  <TestComp></TestComp>
</template>

<script lang="js" setup>
import TestComp from '@/components/TestComp.vue'
import { useMainStore } from '@/stores/reccomandation'
import { useRouter } from 'vue-router'

const store = useMainStore()
const router = useRouter()

const restart = () => {
  store.reset()
  router.push('/feed')
}
</script>

<style></style>

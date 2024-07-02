import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import WhatToWatchComponent from '../components/WhatToWatchComponent.vue'
import GenreComponent from '../components/GenreComponent.vue'
import DecadeComponent from '../components/DecadeComponent.vue'
import MoodComponent from '../components/MoodComponent.vue'
import MPAAComponent from '../components/MPAAComponent.vue'
import RegisterView from '../views/RegisterView.vue'
import SignInView from '../views/SignInView.vue'
import ResultView from '../views/ResultView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: HomeView
    },
    {
      path: '/feed',
      component: FeedView,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'watch',
          component: WhatToWatchComponent
        },
        {
          path: 'genre',
          component: GenreComponent
        },
        {
          path: 'decade',
          component: DecadeComponent
        },
        {
          path: 'mood',
          component: MoodComponent
        },
        {
          path: 'mpaa',
          component: MPAAComponent
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView
    },
    {
      path: '/result',
      name: 'result',
      component: ResultView
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      next('/register')
    }
  } else {
    next()
  }
})

export default router

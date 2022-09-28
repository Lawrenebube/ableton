import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contactUs from '../views/contactUs.vue'
import needHelp from '../views/needHelp.vue'
import pushComponent from '../views/push.vue'
import barComponent from '../views/bars.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pushComponent',
    name: 'pushComponent',
    component: pushComponent
  },
  {
    path: '/en',
    name: 'barComponent',
    component: barComponent
  },
  {
    path: '/needHelp',
    name: 'needHelp',
    component:needHelp
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: contactUs
  },
  
  // {
  //   path: '/about',
  //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

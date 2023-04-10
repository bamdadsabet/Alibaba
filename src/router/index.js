import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {auth: true},
    component: Home
  },
  {
    path: '/country/:name',
    name: '',
    component: () => import('../view/CountryDetail.vue')
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router

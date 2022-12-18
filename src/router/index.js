import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //api q tiene el navegador, q utiliza el historial de navegación del propio navegador
  linkActiveClass: "active", //aqui queda de forma global, sino hay q ponerlo en cada Routerlink
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView //aqui se llama todo
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue') //aqui se llama cuando se carga
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../views/FavoriteView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router

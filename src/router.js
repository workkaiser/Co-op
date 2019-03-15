import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreerCompte from './views/CreerCompte.vue'
import Connexion from './views/Connexion.vue'
import Discussions from './views/Discussions.vue'
//include 'utils.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/CreerCompte',
      name: 'CreerCompte',
      component: CreerCompte
    },
    {
      path: '/Connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/Discussions',
      name: 'Discussions',
      component: Discussions
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

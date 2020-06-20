import Vue from 'vue'
import VueRouter from 'vue-router'
import Modal from '../views/Modal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'modal',
    component: Modal
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: () =>
      import(/* webpackChunkName: "list" */ '../views/Drawer.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import(/* webpackChunkName: "list" */ '../views/Cards.vue')
  },
  {
    path: '/simple',
    name: 'simple',
    component: () =>
      import(/* webpackChunkName: "simple" */ '../views/Simple.vue')
  },
  {
    path: '/stagger',
    name: 'stagger',
    component: () =>
      import(/* webpackChunkName: "stagger" */ '../views/Stagger.vue')
  },
  {
    path: '/state',
    name: 'state',
    component: () =>
      import(/* webpackChunkName: "state" */ '../views/State.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

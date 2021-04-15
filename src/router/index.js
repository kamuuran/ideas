import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import About from '../views/About.vue'
import Finish from '../views/Finish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:id?/home',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/:id?/form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/:id?/finish',
    name: 'Finish',
    component: Finish
  },
  {
    path: '/:id?/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  let lang = localStorage.getItem('language')
  lang = lang ? lang : "az";
  if (!to.params.id && to.path == '/') {
    next(lang + '/home');
  } else if (to.path == '/en' || to.path == '/az' || to.path == '/ru') {
    next(to.path + '/home');
  } else if (!to.params.id && to.path != '/form' && to.path != '/finish' && to.path != '/finish' && to.path != '/about' && to.path != '/home') {
    next(lang + '/home');
  } else if (!to.params.id && (to.path == '/form' || to.path == '/finish' || to.path == '/finish' || to.path == '/about' || to.path == '/home')) {
    next(lang + to.path);
  }
  next()
})

export default router

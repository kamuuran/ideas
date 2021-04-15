import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import About from '../views/About.vue'
import Finish from '../views/Finish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:id?',
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
  console.log(to.params.id);
  console.log(to.path);
  if (!to.params.id && to.path == '/') {
    next(lang);
  } else if (to.path == '/en' || to.path == '/az' || to.path == '/ru') {
    next(to.path + '/');
  } else if (!to.params.id && to.path != '/form' && to.path != '/finish' && to.path != '/about' && to.path != '/') {
    next(lang + '/');
  } else if (!to.params.id && (to.path == '/form' || to.path == '/finish' || to.path == '/about' || to.path == '/')) {
    next(lang + to.path);
  } else if (to.params.id == 'form' || to.params.id == 'finish' || to.params.id == 'about' || to.params.id == '/') {
    next(lang + to.path);
  } else if ((to.params.id != 'ru' && to.params.id != 'en' && to.params.id != 'az') && to.path != '/form' && to.path != '/finish' && to.path != '/about' && to.path != '/') {
    next(lang + '/');
  }
  next()
})

export default router

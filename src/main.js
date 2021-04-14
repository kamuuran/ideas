import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LottieAnimation from 'lottie-web-vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  LottieAnimation,
  render: h => h(App)
}).$mount('#app')

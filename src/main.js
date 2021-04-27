import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LottieAnimation from 'lottie-web-vue'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-172424383-1',
});

new Vue({
  router,
  store,
  LottieAnimation,
  render: h => h(App)
}).$mount('#app')

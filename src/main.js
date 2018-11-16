import Vue from 'vue'
import App from './App.vue'

import VuePeity from './lib/index'

Vue.use(VuePeity)

new Vue({
  el: '#app',
  render: h => h(App)
})

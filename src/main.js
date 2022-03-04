import Vue from 'vue'
import App from './App.vue'
import TestTraid from './TestTraid.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(TestTraid),
}).$mount('#test_traid')
import Vue from 'vue'
import App from './App.vue'
import Style from './assets/scss/Style.css'

Vue.config.productionTip = false
Style.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

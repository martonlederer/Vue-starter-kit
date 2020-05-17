import Vue from 'vue'
import App from './App'

import router from './router'
import store from './state/store'

Vue.config.productionTip = false

new Vue({

  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'

})

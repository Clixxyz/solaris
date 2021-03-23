import Vue from 'vue'
import VueSocketio from 'vue-socket.io' // NOTE: There is an issue with >3.0.7 so forced to use 3.0.7, see here: https://stackoverflow.com/questions/61769716/vue-socket-connection-not-triggered
import VueGtag from 'vue-gtag'
import Toasted from 'vue-toasted'
import App from './App.vue'
import router from './router'
import store from './store'

import $ from 'jquery'
import 'bootstrap'
import 'bootswatch/dist/darkly/bootstrap.min.css'

import 'pixi.js-legacy'
import 'pixi-viewport'

Vue.config.productionTip = false
window.$ = $;

Vue.use(new VueSocketio({
  debug: true,
  connection: `//${process.env.VUE_APP_SOCKETS_HOST}`,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

let trackingCode = process.env.VUE_APP_GOOGLE_ANALYTICS_TRACKING_CODE

if (trackingCode) {
  Vue.use(VueGtag, {
    config: { id: trackingCode }
  }, router)
}

Vue.use(Toasted, {
  position: 'bottom-right',
  duration: 3000
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

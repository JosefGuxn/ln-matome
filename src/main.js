// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import * as firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD-coZaZBG_LCjCbJ0ajDNptG7F37NUOtg',
      authDomain: 'ln-matome.firebaseapp.com',
      databaseURL: 'https://ln-matome.firebaseio.com',
      projectId: 'ln-matome',
      storageBucket: ''
    })
  }
})

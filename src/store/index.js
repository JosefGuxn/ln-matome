import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import novels from './modules/novels'
import chapters from './modules/chapters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    novels,
    chapters
  }
})

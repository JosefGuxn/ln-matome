import * as firebase from 'firebase'
import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  getNovels: state => state.all,
  getNovelsArr: state => Object.values(state.all)
}

const actions = {
  loadNovels ({commit}) {
    firebase.database().ref('series').on('value', novels => {
      commit(types.RECEIVE_NOVELS, { novels })
    })
  }
}

const mutations = {
  [types.RECEIVE_NOVELS] (state, {novels}) {
    state.all = novels.val()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

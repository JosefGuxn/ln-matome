import * as firebase from 'firebase'
import * as types from '../mutation-types'
import _ from 'underscore'

const state = {
  all: []
}

const getters = {
  allNovels: state => state.all,
  allNovelsArr: state => _.sortBy(Object.values(state.all), 'title'),
  getSeriesInfo: (state, getters) => (id) => {
    return _.findWhere(Object.values(state.all), {id: id})
  }
}

const actions = {
  loadNovels ({commit}) {
    firebase.database().ref('novels').on('value', novels => {
      commit(types.RECEIVE_NOVELS, { novels })
    })
  }
}

const mutations = {
  [types.RECEIVE_NOVELS] (state, {novels}) {
    state.all = novels.val()
  },
  [types.ADD_SERIES] (state, {newSeries}) {
    // var newSeriesKey = firebase.database().ref().child('novels').push().key

    newSeries.lastupdate = firebase.database.ServerValue.TIMESTAMP
    var updates = {}
    updates['/novels/' + newSeries.id] = newSeries

    firebase.database().ref().update(updates)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

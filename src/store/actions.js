import * as types from './mutation-types'

export const addSeries = ({commit}, newSeries) => {
  commit(types.ADD_SERIES, { newSeries })
}

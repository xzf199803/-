import {reqcateLists} from '../../api'
const state = {
  items:[]
}
const mutations = {
  CATELISTS (state, items) {
    state.items = items
  },
}
const actions = {
  async getcateLists ({commit}) {
    const result = await reqcateLists()
    if (result.code === 200) {
      commit('CATELISTS', result.data)
    }
  },
  
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
import {reqcateNavDatas} from '../../api'
const state = {
  items:[]
}
const mutations = {
  CATENAVDATAS (state, items) {
    state.items = items
  },
}
const actions = {
  async getcateNavDatas ({commit}) {
    const result = await reqcateNavDatas()
    if (result.code === 200) {
      commit('CATENAVDATAS', result.data)
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
import {reqcateNavDatas,reqcateLists} from '../../api'
const state = {
  items:[],
  list:[]
}
const mutations = {
  CATENAVDATAS (state, items) {
    state.items = items
  },
  CATELISTS(state, list) {
    state.list = list
  },
}
const actions = {
  async getcateNavDatas ({commit}) {
    const result = await reqcateNavDatas()
    if (result.code === 200) {
      commit('CATENAVDATAS', result.data.categoryL1List)
    }
  },
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
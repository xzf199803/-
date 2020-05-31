import {reqrecManual} from '../../api'
const state = {
  navList:[],

}
const mutations = {
  RECMANUAL (state, navList) {
    state.navList = navList
  },
}
const actions = {
  async getrecManual ({commit}) {
    const result = await reqrecManual()
    if (result.code == 200) {
      commit('RECMANUAL', result.data.navList)
      
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
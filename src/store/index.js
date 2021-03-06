// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 声明使用Vuex
Vue.use(Vuex)
// 引入state
import state from './state'
// 引入mutations
import mutations from './mutations'
// 引入actions
import actions from './actions'
// 引入getters
import getters from './getters'
// 引入modules
import modules from './modules'

export default new Vuex.Store({
  state, // 总的state
  mutations, // 总的mutations
  actions, // 总的actions
  getters, // 总的getters
  modules
  
})



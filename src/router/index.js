import Vue from 'vue'
// 引入VueRouter 
import VueRouter from 'vue-router'
// 引入routes
import routes from './routers'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history', // 设置路由地址的模式---hash是带#,history---不带#
  routes, // 路由组件的注册的数组
})
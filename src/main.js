import Vue from 'vue'
import App from './App.vue'
import './mock/mockServer'
import router from './router'
import store from './store'
import {
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  Sidebar, 
  SidebarItem
} from 'vant';

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  API from './api/api.js'
import '../src/assets/icon/iconfont.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$api = API;

let bus = new Vue()
Vue.prototype.$bus = bus

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

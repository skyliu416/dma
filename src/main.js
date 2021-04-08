import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  API from './api/api.js'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$api = API;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

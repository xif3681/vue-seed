import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import services from './services'
import ElementUI from 'element-ui';
import moment from 'moment'

// import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/element-variables.scss'
Vue.use(ElementUI);
moment.locale('zh-cn')

Vue.config.productionTip = false

Vue.prototype.$services = services

Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { fitChartSize } from '@/utils/echartUtils.js'
// https://blog.csdn.net/u010622874/article/details/104396342
import 'default-passive-events'
Vue.prototype.fitChartFont = fitChartSize
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

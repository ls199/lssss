// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './global-components'
import state from './state'
//import vueState from './plugins/state'


Vue.config.productionTip = false
//使用state插件
//Vue.use(vueState.state)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: state,
  router,
  components: { App },
  template: '<App/>'
})



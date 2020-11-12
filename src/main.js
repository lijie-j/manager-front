// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import './assets/styles/element-variables.scss'
import './assets/styles/reset.scss'
import Store from './store'


Vue.config.productionTip = false

Vue.use(Element)
Vue.use(Store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

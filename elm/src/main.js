// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/basic.css'
import './assets/css/iconfont.css'
import './assets/css/index.css'
import '../node_modules/jquery/dist/jquery'
import '../node_modules/swiper/dist/css/swiper.css'
import '../node_modules/swiper/dist/js/swiper'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

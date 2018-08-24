// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// jq
import $ from 'jquery'
import './assets/js/jq.animate.js'

// 初始化css
import './assets/css/base.css'

// vee-validate
import './assets/js/validate.js'
import VeeValidate from 'vee-validate';

const config = {
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: null,
  errorBagName: 'errors', // change if property conflicts
  events: 'input|blur',
  fieldsBagName: 'fields',
  i18n: null, // the vue-i18n plugin instance
  i18nRootKey: 'validations', // the nested key under which the validation messages will be located
  inject: true,
  locale: 'en',
  strict: true,
  validity: false,
};

Vue.use(VeeValidate, config);

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

// swiper 
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import 'swiper/dist/css/animate.min.css';
import 'swiper/dist/js/swiper.min.js';
// import 'swiper/dist/js/swiper.animate1.0.3.min.js';

// 视频组件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

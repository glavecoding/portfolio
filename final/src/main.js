import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Directives from "./directive.js";
import "./scss/index.scss"
// import Registers from "./registers.js";

import VueLottiePlayer from "vue-lottie-player";
Vue.use(VueLottiePlayer);
Vue.use(Directives);
// Vue.use(Registers);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

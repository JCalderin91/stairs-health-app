import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './assets/css/style.css';


Vue.config.productionTip = false;
Vue.prototype.$http = axios;

sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

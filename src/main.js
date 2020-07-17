import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './assets/scss/style.scss';

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyArEloE-Gg4tUr7j7qVvyyUWZGa1RU2KZA",
    },
});

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

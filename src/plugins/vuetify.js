import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00cae9',
        secondary: '#ffe600',
        accent: '#03a9f4',
        error: '#f44336',
        warning: '#ffc107',
        info: '#4caf50',
        success: '#9c27b0' 
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});

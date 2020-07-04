import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Speciality from './modules/Speciality'

export default new Vuex.Store({
  state: {
    login: ''
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  getters: {
    //
  },
  modules: {
    Speciality
  }
});


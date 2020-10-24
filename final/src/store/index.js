import Vue from 'vue'
import Vuex from 'vuex'

import Project from './data/project.js'
import Universal from './data/universal.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    project: {
      namespaced: true,
      ...Project,
    },
    universal: {
      namespaced: true,
      ...Universal,
    },
  },
});

import Vue from 'vue'
import Vuex from 'vuex'

import en from '../localization/en'
import az from '../localization/az'
import ru from '../localization/ru'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loca: {},
  },
  mutations: {
    setLoca(state, payload) {
      if (payload == 'en')
        state.loca = en
      else if (payload == 'ru')
        state.loca = ru
      else state.loca = az
    },
  },
  actions: {
    updateLoca({ commit }, payload) {
      commit('setLoca', payload)
    },
  },
  modules: {
  }
})

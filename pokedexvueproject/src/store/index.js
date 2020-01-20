import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    apiUrl: 'https://pokeapi.co/api/v2/pokemon/'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

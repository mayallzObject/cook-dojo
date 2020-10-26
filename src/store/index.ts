import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meals: [{ idMeal: 1 }, { idMeal: 2 }, { idMeal: 3 }, { idMeal: 4 }]
  },
  mutations: {},
  actions: {},
  modules: {}
})

import Vue from "vue"
import Vuex from "vuex"
import MealServices from "@/services/MealServices.ts"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meals: [],
    mealID: []
  },
  mutations: {
    SET_MEALS(state, meals) {
      state.meals = meals
    },
    SET_MEAL(state, mealID) {
      state.mealID = mealID
    }
  },
  actions: {
    fetchMeals({ commit }) {
      MealServices.getMeals()
        .then(response => {
          commit("SET_MEALS", response.data.meals)
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    },
    fetchMeal({ commit }, id) {
      MealServices.getMealByID(id)
        .then(response => {
          commit("SET_MEAL", response.data.meals)
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    }
  },
  modules: {}
})

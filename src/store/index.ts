import Vue from "vue"
import Vuex from "vuex"
import MealServices from "@/services/MealServices.ts"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meals: [],
    mealID: [],
    mealRandom: [],
    categories: [],
    mealsCat: []
  },
  mutations: {
    SET_MEALS(state, meals) {
      state.meals = meals
    },
    SET_MEAL_ID(state, mealID) {
      state.mealID = mealID
    },
    SET_RANDOM_MEAL(state, mealRandom) {
      state.mealRandom = mealRandom
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_CAT_MEAL(state, mealsCat) {
      state.mealsCat = mealsCat
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
          commit("SET_MEAL_ID", response.data.meals)
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    },
    fetchCategories({ commit }) {
      MealServices.getCategories()
        .then(response => {
          commit("SET_CATEGORIES", response.data.categories)
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    },
    fetchRandomMeal({ commit }) {
      MealServices.getRandomtMeal()
        .then(response => {
          commit("SET_RANDOM_MEAL", response.data.meals)
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    },
    fetchMealByCat({ commit }, names) {
      MealServices.getCatMeals(names)
        .then(response => {
          commit("SET_CAT_MEAL", response.data.meals)
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    }
  },
  getters: {
    doneTodos: state => {
      return state.meals.sort(meal => meal)
    }
  },
  modules: {}
})

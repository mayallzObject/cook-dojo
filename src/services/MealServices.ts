import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://www.themealdb.com/api/json/v2/9973533`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getMeals() {
    return apiClient.get(`/latest.php?_page=7`)
  },
  getMealByID(id: string) {
    return apiClient.get(`/lookup.php?i=${id}`)
  },
  getRandomtMeal() {
    return apiClient.get(`/random.php`)
  },
  getCategories() {
    return apiClient.get(`/categories.php`)
  },
  getCatMeals(names: string) {
    return apiClient.get(`/filter.php?c=${names}`)
  },
  getMealsRandom() {
    return apiClient.get(`/randomselection.php`)
  }
}

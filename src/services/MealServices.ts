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
    return apiClient.get("/latest.php")
  }
}

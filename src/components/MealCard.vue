<template>
  <router-link
    class="meal-link"
    :to="{
      name: 'details',
      params: { id: meal.idMeal }
    }"
  >
    <div class="meal-card ">
      <div class="header">{{ meal.strMeal }}</div>
      <img class="img" :src="meal.strMealThumb" alt="Image" />
      <div>See details</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "MealCard",
  props: {
    meal: Object
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.meal-card {
  box-sizing: border-box;
  background-color: #cbf0cf;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  width: 300px;
  margin: 15px;
  padding: 20px;
  transition: all 0.3s linear;
  cursor: pointer;
}

.meal-card:hover {
  transform: scale(1.11);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  background-color: #233329;
  background-image: linear-gradient(360deg, green, #63d471, green);
  color: #fff;
}
.meal-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.img {
  cursor: pointer;
  align-items: content-center;
  width: 120px;
  height: 120px;
  vertical-align: middle;
}
</style>

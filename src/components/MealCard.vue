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
  align-items: center;
  /* background-image: linear-gradient(#4caf50, yellowgreen, #4caf50); */
  background-color: #deebdd;
  background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
  width: 400px;
  margin: 15px;
  padding: 40px;
  transition: all 0.4s linear;
  cursor: pointer;
}
.meal-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  background-color: green;
  background-image: linear-gradient(315deg, yellowgreen 0%, #4caf50 74%);
  color: white;
}
.meal-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.img {
  transition: all 0.2s linear;
  cursor: pointer;
  align-items: content-center;
  width: 150px;
  height: 140px;
  transition: all 0.2s ease;
  vertical-align: middle;
}
</style>

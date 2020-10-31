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
  color: #fff;
  background-image: linear-gradient(90deg, #63d471, #233329, #63d471);
  width: 300px;
  margin: 15px;
  padding: 20px;
  transition: all 0.4s linear;
  cursor: pointer;
}
.meal-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  color: #fff;
  background-image: linear-gradient(360deg, #233329, #63d471, #233329);
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

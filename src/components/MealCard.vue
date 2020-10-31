<template>
  <router-link
    class="meal-link"
    :to="{
      name: 'details',
      params: { id: meal.idMeal }
    }"
  >
    <div class="meal-card ">
      <div>{{ meal.strMeal }}</div>
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
  background-image: linear-gradient(
    rgb(197, 185, 185),
    white,
    rgb(196, 185, 185)
  );
  width: 400px;
  margin: 15px;
  padding: 10px;
  transition: all 0.4s linear;
  cursor: pointer;
}
.meal-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  background-image: linear-gradient(green, #4caf50, green);
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
  width: 160px;
  height: 120px;
  transition: all 0.2s ease;
  vertical-align: middle;
}
</style>

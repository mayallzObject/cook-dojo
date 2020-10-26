<template>
  <div class="meal-card ">
    <h3>{{ meal.strMeal }}</h3>
    <!-- <h3 class="meal-category">category: {{ meal.strCategory }}</h3>
      <h3 class="meal-kitechen">kitchen: {{ meal.strArea }}</h3> -->
    <img class="img" :src="meal.strMealThumb" alt="Image" />
    <p>See details</p>
  </div>
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
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.meal-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.img {
  width: 170px;
  height: 170px;
}
</style>

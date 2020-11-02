<template>
  <router-link
    class="meal-link"
    :to="{
      name: 'details',
      params: { id: meal.idMeal }
    }"
  >
    <div class="meal-card ">
      <img class="img" :src="meal.strMealThumb" alt="Image" />
      <h5 class="mealcard-title">{{ meal.strMeal }}</h5>
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
  background-color: #34bb443f;
  /* background-image: linear-gradient(260deg, green 0%, #63d471, green 94%); */
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  width: 310px;
  margin: 20px;
  padding: 40px 10px 10px;
  height: auto; /*All cards have the same height*/
  transition: all 0.2s linear;
  cursor: pointer;
}

.meal-card:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 21px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  background-color: #233329;
  background-image: linear-gradient(260deg, green 0%, #63d471, green 94%);
  color: #fff;
  border-color: #fff;
}

.meal-link {
  color: #6b927a;
  text-decoration: none;
  font-weight: bold;
}
.img {
  max-width: 240px;
  height: auto;
  border-style: solid;
}
</style>

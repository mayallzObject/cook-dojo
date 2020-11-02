<template>
  <router-link
    class="meal-link"
    :to="{
      name: 'details',
      params: { id: meal.idMeal }
    }"
  >
    <div class="meal-card ">
      <h4 class="meal">{{ meal.strMeal }}</h4>
      <img class="img" :src="meal.strMealThumb" alt="Image" />
      <p class="details">Click for details</p>
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
  color: #233329;
  background-color: #ddf5e1;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  max-width: 310px;
  margin: 20px;
  padding: 20px;
  height: auto; /*All cards have the same height*/
  transition: all 0.3s linear;
  cursor: pointer;
}

.meal-card:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 21px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  background-color: #63d471;
  background-image: linear-gradient(180deg, green 0%, #63d471 0%, green 20%);
  color: #fff;
}

.meal-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.img {
  align-items: content-center;
  width: 100%;
  max-width: 200px;
  height: auto;
}
</style>

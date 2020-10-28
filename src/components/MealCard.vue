<template>
  <div>
    <router-link
      class="meal-link"
      :to="{ name: 'details', params: { id: meal.idMeal } }"
    >
      <div class="meal-card ">
        <h3>{{ meal.strMeal }}</h3>
        <img class="img" :src="meal.strMealThumb" alt="Image" />
        <h6>See details</h6>
      </div>
    </router-link>
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
  transition: all 0.2s linear;
  cursor: pointer;
}
.meal-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.meal-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.img {
  width: 170px;
  height: 170px;
}
</style>

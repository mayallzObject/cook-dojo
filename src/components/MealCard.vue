<template>
  <router-link
    class="meal-link"
    :to="{
      name: 'details',
      params: { id: meal.idMeal }
    }"
  >
    <div class="meal-card ">
      <h4>{{ meal.strMeal }}</h4>
      <img class="img" :src="meal.strMealThumb" alt="Image" />
      <h6>See details</h6>
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
  width: 300px;
  margin: 20px;
  padding: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.meal-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  background-color: #4caf50;
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
  width: 210px;
  height: 170px;
}
.img:hover {
  transform: scale(2.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>

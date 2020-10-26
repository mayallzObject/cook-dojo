<template>
  <div class="meal-card">
    <h1>{{ meal.strMeal }}</h1>
    <img class="img" :src="meal.strMealThumb" alt="Image" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "DetailsCard",
  props: {
    meal: Object
  }
})
</script>

<style scoped>
.meal-card {
  padding: 0 20px 20px;
  margin: 20px 20px;
}
.img {
  width: 400px;
  height: 475px;
}
</style>

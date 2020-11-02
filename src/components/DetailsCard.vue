<template>
  <div class="meal-card">
    <h5>{{ meal.strMeal }}</h5>
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
.img {
  width: 300px;
  height: 300px;
}
</style>

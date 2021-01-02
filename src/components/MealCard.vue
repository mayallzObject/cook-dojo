<template>
  <div class="meal-card">
    <router-link
      class="meal-card__link"
      :to="{
        name: 'details',
        params: { id: meal.idMeal }
      }"
    >
      <img class="meal-card__img" :src="meal.strMealThumb" alt="Image" />
      <h5 class="meal-card__heading">{{ meal.strMeal }}</h5>
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

<template>
  <div class="details-card">
    <div class="details-card__heading">{{ meal.strMeal }}</div>

    <div class="row">
      <div class="col-2-of-3">
        <img class="details-card__img" :src="meal.strMealThumb" alt="Image" />

        <ul class="list">
          <li class="details-card__heading--sub">Details</li>
          <li>Category: {{ meal.strCategory }}</li>
          <li>Kitchen: {{ meal.strArea }}</li>
          <li>Tags: {{ meal.strTags }}</li>
        </ul>
      </div>

      <div class="col-1-of-3">
        <ul class="list">
          <li class="details-card__heading--sub">Ingridients</li>
          <li>{{ meal.strIngredient1 }} {{ meal.strMeasure1 }}</li>
          <li>{{ meal.strIngredient1 }} {{ meal.strMeasure1 }}</li>
          <li>{{ meal.strIngredient2 }} {{ meal.strMeasure2 }}</li>
          <li>{{ meal.strIngredient3 }} {{ meal.strMeasure3 }}</li>
          <li>{{ meal.strIngredient4 }} {{ meal.strMeasure4 }}</li>
          <li>{{ meal.strIngredient5 }} {{ meal.strMeasure5 }}</li>
          <li>{{ meal.strIngredient6 }} {{ meal.strMeasure6 }}</li>
          <li>{{ meal.strIngredient7 }} {{ meal.strMeasure7 }}</li>
          <li>{{ meal.strIngredient8 }} {{ meal.strMeasure8 }}</li>
          <li>{{ meal.strIngredient9 }} {{ meal.strMeasure9 }}</li>
          <li>{{ meal.strIngredient10 }} {{ meal.strMeasure10 }}</li>

          <li>{{ meal.strIngredient11 }} {{ meal.strMeasure11 }}</li>
          <li>{{ meal.strIngredient12 }} {{ meal.strMeasure12 }}</li>
          <li>{{ meal.strIngredient13 }} {{ meal.strMeasure13 }}</li>
          <li>{{ meal.strIngredient14 }} {{ meal.strMeasure14 }}</li>
          <li>{{ meal.strIngredient15 }} {{ meal.strMeasure15 }}</li>
          <li>{{ meal.strIngredient16 }} {{ meal.strMeasure16 }}</li>
          <li>{{ meal.strIngredient17 }} {{ meal.strMeasure17 }}</li>
          <li>{{ meal.strIngredient18 }} {{ meal.strMeasure18 }}</li>
          <li>{{ meal.strIngredient19 }} {{ meal.strMeasure19 }}</li>
          <li>{{ meal.strIngredient20 }} {{ meal.strMeasure20 }}</li>
        </ul>
      </div>
    </div>

    <div class="details-card__heading--sub">Instructions</div>
    <div class="details-card__instructions">{{ meal.strInstructions }}</div>
    <a :href="meal.strYoutube" target="_blank">
      <div class="details-card__link">YouTube Video...</div>
    </a>
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

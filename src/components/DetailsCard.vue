<template>
  <div class="details-card">
    <h3 class="details-title">{{ meal.strMeal }}</h3>

    <img class="details-img" :src="meal.strMealThumb" alt="Image" />
    <ul class="details-ingr">
      <h4 class="details-title">Details</h4>
      <li>Category: {{ meal.strCategory }}</li>
      <li>Kitchen: {{ meal.strArea }}</li>
      <li>Tags: {{ meal.strTags }}</li>
      <h4 class="details-title">Ingridients</h4>
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
    <ul class="details-text">
      <h4 class="details-title">Instructions</h4>
      <li>{{ meal.strInstructions }}</li>
      <a :href="meal.strYoutube" target="_blank">
        <p>...YouTube Video...</p>
      </a>
    </ul>
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
.details-card {
  display: flex-box;
  box-sizing: border-box;
  margin: 20px;
  padding: 10px;
  font-family: "Merienda", Helvetica, Arial;
  color: #0d4d25;
  background-color: #ddf5e1;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
.details-title {
  font-family: "Merienda", Helvetica, Arial;
  color: #1a7237e0;
}
.details-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.details-img {
  float: left;
  margin: 10px;
  width: 100%;
  max-width: 34rem;
  height: auto;
}
.details-ingr {
  float: left;
  list-style-type: none;
  margin: 10px;
  text-align: left;
  color: #ba1313;
}
.details-text {
  float: center;
  font-family: "Merienda", Helvetica, Arial;
  margin: 11px;
  font-weight: 500;
  padding: -10px;
  padding: 5px;
  box-sizing: border-box;
  text-decoration: none;
  text-align: left;
  list-style-type: none;
}
.details-card:after {
  content: "";
  clear: both;
  display: table;
}
</style>

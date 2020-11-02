<template>
  <div class="details-card">
    <h3>{{ meal.strMeal }}</h3>

    <img class="details-img" :src="meal.strMealThumb" alt="Image" />
    <ul class="details-ingr">
      <h5 class="sub-title">Details</h5>
      <li>Category: {{ meal.strCategory }}</li>
      <li>Kitchen: {{ meal.strArea }}</li>
      <li>Tags: {{ meal.strTags }}</li>
      <h5 class="sub-title">Ingridients</h5>
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
      <h5 class="sub-title">Instructions</h5>
      <li>{{ meal.strInstructions }}</li>
      <a :href="meal.strYoutube" target="_blank">
        <p>YouTube Video</p>
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
  box-sizing: border-box;
  display: flex-box;
  color: #233329;
  background-color: #ddf5e1;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  margin: 20px;
  padding: 10px;
  min-height: 100%;
}

.meal-card:hover {
  transform: scale(1.11);
  box-shadow: 0 4 6px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  background-color: #4fb15a;
  color: #fff;
}
.details-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.details-img {
  float: left;
  width: 100%;
  height: auto;
  max-width: 37rem;
}
.details-ingr {
  float: left;
  text-decoration: none;
  text-align: left;
  list-style-type: none;
}
.details-text {
  box-sizing: border-box;
  float: right;
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

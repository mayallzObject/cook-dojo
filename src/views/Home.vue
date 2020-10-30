<template>
  <div>
    <div class="ooo">
      <div class="btn-group">
        <CatButton v-for="cat in categories" :key="cat.idCategory" :cat="cat" />
      </div>
      <div></div>
      <h1>Latest Meals:</h1>
    </div>

    <div class="flex-container">
      <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"
import CatButton from "@/components/CatButton.vue"
import { mapState } from "vuex"

export default Vue.extend({
  name: "Home",
  components: {
    MealCard,
    CatButton
  },
  created() {
    this.$store.dispatch("fetchMeals", {})
    this.$store.dispatch("fetchCategories", {})
  },
  computed: mapState(["meals", "categories"])
})
</script>

<style scope>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.flex-container > div {
  width: 100%;
  text-align: center;
}
.btn-group button {
  margin: 5px;
  background-color: #4caf50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
.ooo {
  background-image: "hello.jpg";
}
</style>

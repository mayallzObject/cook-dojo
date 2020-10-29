<template>
  <div class="flex-container">
    <div class="cat-button">
      <CatButton v-for="cat in categories" :key="cat.id" :cat="cat" />
    </div>
    <div class="flex-container">
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
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
.cat-button {
  margin-top: 3rem;
  background-color: #4caf50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}
.cat-button:hover {
  margin-top: 3rem;
}
</style>

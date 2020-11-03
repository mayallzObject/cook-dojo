<template>
  <div>
    <CategoriesButton />
    <h2 class="sub-title">{{ names }} Category</h2>
    <div class="cat-meal">
      <MealCard v-for="meal in mealsCat" :key="meal.names" :meal="meal" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"
import CategoriesButton from "@/components/CategoriesButton.vue"
import { mapState, mapGetters } from "vuex"

export default Vue.extend({
  props: ["names"],
  name: "CatMeals",
  components: {
    MealCard,
    CategoriesButton
  },
  created() {
    this.$store.dispatch("fetchMealByCat", this.names)
    this.$store.dispatch("fetchCategories")
  },
  computed: {
    // the getter is temporary disabled
    ...mapGetters(["catLength"]),
    ...mapState(["mealsCat", "categories"])
  }
})
</script>

<style scoped>
.cat-meal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cat-meal > div {
  width: 500px;
  text-align: center;
}
</style>

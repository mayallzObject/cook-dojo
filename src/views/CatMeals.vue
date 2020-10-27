<template>
  <div>
    <h5>{{ names }}</h5>
    <MealCard v-for="meal in mealsCat" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"
import { mapState } from "vuex"

export default Vue.extend({
  props: ["names"],
  name: "CatMeals",
  components: {
    MealCard
  },
  created() {
    this.$store.dispatch("fetchMealByCat", this.names)
  },
  computed: mapState(["mealsCat"])
})
</script>

<style scoped></style>

<template>
  <div>
    <div class="flex-container">
      <MealCard v-for="meal in mealRandom" :key="meal.id" :meal="meal" />
    </div>
    <button @click.prevent="$store.dispatch('fetchRandomMeal')">
      Random
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
import MealCard from "@/components/MealCard.vue"

export default Vue.extend({
  name: "Randomizer",
  components: {
    MealCard
  },
  created() {
    this.$store.dispatch("fetchRandomMeal")
  },
  computed: mapState(["mealRandom"])
})
</script>

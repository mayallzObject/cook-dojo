<template>
  <div>
    <button class="button" @click.prevent="getRandom">
      Random
    </button>
    <h2 class="sub-title">Random Meal</h2>
    <div class="flex-container">
      <MealCard v-for="meal in mealRandom" :key="meal.id" :meal="meal" />
    </div>
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
  computed: mapState(["mealRandom"]),
  methods: {
    getRandom() {
      this.$store.dispatch("fetchRandomMeal")
    }
  }
})
</script>

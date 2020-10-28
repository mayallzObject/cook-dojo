<template>
  <div class="randomizer">
    <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    <button @click.prevent="$store.dispatch('fetchRandomMeal', meals)">
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
  computed: mapState(["meals"])
})
</script>

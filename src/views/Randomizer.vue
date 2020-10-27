<template>
  <div class="randomizer">
    <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    <!-- <button @click.prevent="$store.dispatch('fetchRandomMeal')">
      Random
    </button> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
import MealCard from "@/components/MealCard.vue"
// import RandomButton from "@/components/RandomButton.vue"

export default Vue.extend({
  name: "Random",
  components: {
    MealCard
    // RandomButton
  },
  created() {
    this.$store.dispatch("fetchRandomMeal", {})
  },
  computed: mapState(["meals"])
})
</script>

<style scoped></style>

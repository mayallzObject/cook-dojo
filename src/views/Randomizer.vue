<template>
  <div>
    <header class="home-heading">Random Meal</header>

    <section class="section-meal">
      <a class="btn btn--white btn--animated" @click.prevent="getRandom">
        Random
      </a>
      <MealCard v-for="meal in mealRandom" :key="meal.id" :meal="meal" />
    </section>
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

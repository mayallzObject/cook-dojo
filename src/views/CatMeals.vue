<template>
  <div>
    <header class="home-heading">{{ names }} Category</header>
    <section class="section-meal">
      <div class="section-meal">
        <MealCard v-for="meal in mealsCat" :key="meal.names" :meal="meal" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"

import { mapState, mapGetters } from "vuex"

export default Vue.extend({
  props: ["names"],
  name: "CatMeals",
  components: {
    MealCard
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

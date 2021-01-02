<template>
  <div>
    <header class="home-heading">
      Latest Meals
    </header>
    <section class="section-meal">
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"
import { mapState } from "vuex"

export default Vue.extend({
  name: "Home",
  components: {
    MealCard
  },
  data() {
    return { show: false }
  },
  created() {
    this.$store.dispatch("fetchMeals")
    this.$store.dispatch("fetchCategories")
  },
  computed: {
    ...mapState(["meals", "categories"])
  },
  methods: {
    openCatTab() {
      this.show = !this.show
    }
  }
})
</script>

<template>
  <div>
    <header class="home-heading">Details</header>
    <section class="section-details">
      <DetailsCard v-for="meal in mealID" :key="meal.id" :meal="meal" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
import DetailsCard from "@/components/DetailsCard.vue"

export default Vue.extend({
  name: "Details",
  props: ["id"],
  components: {
    DetailsCard
  },
  created() {
    this.$store.dispatch("fetchMeal", this.id)
    this.$store.dispatch("fetchMealsRandom")
  },
  computed: mapState(["mealID", "randomMeals"])
})
</script>

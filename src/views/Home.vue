<template>
  <div class="home">
    <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"
import { mapState } from "vuex"

export default Vue.extend({
  components: {
    MealCard
  },
  created() {
    this.$store.dispatch("fetchMeals", {})
  },
  computed: mapState(["meals"])
})
</script>

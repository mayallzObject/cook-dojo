<template>
  <div class="home">
    <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
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
  computed: mapState(["meals"])
})
</script>

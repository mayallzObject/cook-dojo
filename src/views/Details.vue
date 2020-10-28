<template>
  <div>
    <h1>{{ names }}</h1>
    <div>
      <DetailsCard v-for="meal in mealID" :key="meal.id" :meal="meal" />
    </div>
    <div>
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
import DetailsCard from "@/components/DetailsCard.vue"
import MealCard from "@/components/MealCard.vue"

export default Vue.extend({
  name: "Details",
  props: ["id", "names"],
  components: {
    DetailsCard,
    MealCard
  },
  created() {
    this.$store.dispatch("fetchMeal", this.id)
    this.$store.dispatch("fetchMeals")
  },
  computed: {
    mealRelation() {
      return this.$store.state.categories
    },
    ...mapState(["mealID", "meals", "categories"])
  }
})
</script>

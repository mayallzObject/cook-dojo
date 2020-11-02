<template>
  <div>
    <div>
      <DetailsCard v-for="meal in mealID" :key="meal.id" :meal="meal" />
    </div>
    <h1>Random recommendations</h1>
    <div>
      <DetailsCard
        v-for="meal in randomMeals.slice(1, 4)"
        :key="meal.id"
        :meal="meal"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
import DetailsCard from "@/components/DetailsCard.vue"

export default Vue.extend({
  name: "Details",
  props: ["id", "names"],
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

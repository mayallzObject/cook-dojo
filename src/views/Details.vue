<template>
  <div>
    <h1>{{ names }}</h1>
    <div>
      <DetailsCard v-for="meal in mealID" :key="meal.id" :meal="meal" />
    </div>
    <div>
      <DetailsCard
        v-for="meal in meals.slice(1, 4)"
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
  data() {
    return {
      limitationList: 5
    }
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

<template>
  <div>
    <div>
      <CatButton v-for="cat in categories" :key="cat.id" :cat="cat" />
    </div>
    <div class="home">
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"
import CatButton from "@/components/CatButton.vue"
import { mapState } from "vuex"

export default Vue.extend({
  name: "Home",
  components: {
    MealCard,
    CatButton
  },
  created() {
    this.$store.dispatch("fetchMeals", {})
    this.$store.dispatch("fetchCategories", {})
  },
  computed: mapState(["meals", "categories"])
})
</script>

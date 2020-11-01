<template>
  <div>
    <h5>{{ names }}</h5>
    <div>
      <CategoriesButton />
    </div>

    <div class="flex-container">
      <MealCard v-for="meal in mealsCat" :key="meal.names" :meal="meal" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"
import CategoriesButton from "@/components/CategoriesButton.vue"
import { mapState, mapGetters } from "vuex"

export default Vue.extend({
  props: ["names"],
  name: "CatMeals",
  components: {
    MealCard,
    CategoriesButton
  },
  created() {
    this.$store.dispatch("fetchMealByCat", this.names)
    this.$store.dispatch("fetchCategories")
  },
  computed: {
    ...mapGetters(["catLength"]),
    ...mapState(["mealsCat", "categories"])
  }
})
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.flex-container > div {
  width: 500px;
  text-align: center;
}
</style>

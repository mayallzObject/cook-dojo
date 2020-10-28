<template>
  <div>
    <button class="flex-container">
      <CatButton v-for="cat in categories" :key="cat.id" :cat="cat" />
    </button>
    <div class="flex-container">
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
    this.$store.dispatch("fetchMeals", {
      perPage: 3
    })
    this.$store.dispatch("fetchCategories", {})
  },
  computed: mapState(["meals", "categories"])
})
</script>

<style scope>
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

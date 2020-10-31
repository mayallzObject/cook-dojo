<template>
  <div>
    <button class="button" v-on:click="show = !show">
      Find meals by in category
    </button>
    <div v-if="show" class="btn-group">
      <CatButton v-for="cat in categories" :key="cat.idCategory" :cat="cat" />
    </div>
    <div class="header">Latest Meals</div>
    <div class="flex-container">
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"
import CatButton from "@/components/CatButton.vue"
import { mapGetters, mapState } from "vuex"

export default Vue.extend({
  name: "Home",
  components: {
    MealCard,
    CatButton
  },
  data() {
    return { show: false }
  },
  created() {
    this.$store.dispatch("fetchMeals", {})
    this.$store.dispatch("fetchCategories", {})
  },
  computed: {
    ...mapGetters(["sortedTodos"]),
    ...mapState(["meals", "categories"])
  },
  methods: {}
})
</script>

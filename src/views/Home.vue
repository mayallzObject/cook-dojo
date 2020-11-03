<template>
  <div>
    <button class="button" @click="openCatTab">
      Filter by category
    </button>
    <transition name="fade">
      <div v-if="show" class="btn-group">
        <h6>All categories</h6>
        <CatButton v-for="cat in categories" :key="cat.idCategory" :cat="cat" />
      </div>
    </transition>
    <h2 class="sub-title">Latest Meals</h2>
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
    this.$store.dispatch("fetchMeals")
    this.$store.dispatch("fetchCategories")
  },
  computed: {
    ...mapGetters(["sortedTodos"]),
    ...mapState(["meals", "categories"])
  },
  methods: {
    openCatTab() {
      this.show = !this.show
    }
  }
})
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
}
</style>

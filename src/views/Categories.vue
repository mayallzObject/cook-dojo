<template>
  <div>
    <HomeButton />
    <h2 class="sub-title">Categories</h2>
    <div class="flex-container">
      <CategoryCard v-for="cat in categories" :key="cat.names" :cat="cat" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
import CategoryCard from "@/components/CategoryCard.vue"
import HomeButton from "@/components/HomeButton.vue"

export default Vue.extend({
  props: ["names"],
  name: "Categories",
  components: {
    CategoryCard,
    HomeButton
  },
  data() {
    return {
      tabs: ["Reviews", "Make a Review"],
      selectedTab: "Reviews"
    }
  },
  created() {
    this.$store.dispatch("fetchCategories")
    this.$store.dispatch("fetchMealByCat", this.names)
  },
  computed: mapState(["categories"])
})
</script>

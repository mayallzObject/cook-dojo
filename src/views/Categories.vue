<template>
  <div class="flex-container">
    <CategoryCard v-for="cat in categories" :key="cat.names" :cat="cat" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
import CategoryCard from "@/components/CategoryCard.vue"

export default Vue.extend({
  name: "Categories",
  components: {
    CategoryCard
  },
  data() {
    return {
      tabs: ["Reviews", "Make a Review"],
      selectedTab: "Reviews"
    }
  },
  created() {
    this.$store.dispatch("fetchCategories", {})
  },
  computed: mapState(["categories"])
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

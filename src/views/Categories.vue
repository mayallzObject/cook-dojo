<template>
  <div>
    <CategoryCard v-for="cat in categories" :key="cat.idCategory" :cat="cat" />
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
  created() {
    this.$store.dispatch("fetchCategories", {})
  },
  computed: mapState(["categories"])
})
</script>

<style scoped></style>

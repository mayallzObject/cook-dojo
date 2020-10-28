<template>
  <div class="flex-container">
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

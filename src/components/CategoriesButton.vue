<template>
  <router-link :to="{ name: 'categories' }">
    <!-- user friendly button for scrolling back -->
    <button class="button">
      Back to Categories
    </button>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CategoriesButton"
})
</script>

<style scoped>
.home-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
</style>

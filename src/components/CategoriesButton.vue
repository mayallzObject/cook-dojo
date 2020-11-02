<template>
  <router-link :to="{ name: 'categories' }">
    <button class="button">
      Back to Categories
    </button>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CategortiesButton"
})
</script>

<style scoped>
.home-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
</style>

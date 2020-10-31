<template>
  <div class="categories-button">
    <router-link :to="{ name: 'categories' }" tag="button"
      >Back to Categories</router-link
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CategoriesButton"
})
</script>

<style scoped>
.categories-button {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-right: 50px solid #555;
  border-bottom: 25px solid transparent;
}
.categories-button:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.categories-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
</style>

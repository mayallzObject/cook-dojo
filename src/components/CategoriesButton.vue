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
  text-align: center;
  padding: 100px;
  border-radius: 50%;
  transition: all 0.2s linear;
  cursor: pointer;
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

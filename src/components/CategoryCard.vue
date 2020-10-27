<template>
  <div class="category-card">
    <router-link
      :to="{ name: 'CatMeals', params: { names: cat.strCategory } }"
      tag="button"
      >See more {{ cat.strCategory }} recepies</router-link
    >
    <img class="img" :src="cat.strCategoryThumb" alt="Image" />
    <p>{{ cat.strCategoryDescription }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CategoryCard",
  props: {
    cat: Object
  }
})
</script>

<style scoped>
.category-card {
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.category-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.category-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.img {
  width: 170px;
  height: 170px;
}
</style>

<template>
  <router-link
    :to="{
      name: 'catMeals',
      params: { names: cat.strCategory }
    }"
    class="category-link"
  >
    <div class="category-card">
      <h3>{{ cat.strCategory }}</h3>
      <img class="img" :src="cat.strCategoryThumb" alt="Image" />
      <p>{{ cat.strCategoryDescription }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue"
import { mapGetters, mapState } from "vuex"

export default Vue.extend({
  name: "CategoryCard",
  props: {
    cat: Object
  },
  computed: {
    ...mapGetters(["catLength"]),
    ...mapState(["categories"])
  }
})
</script>

<style scoped>
.category-card {
  box-sizing: border-box;
  background-color: #cbf0cf;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  width: 300px;
  margin: 15px;
  padding: 20px;
  text-align: left;
  transition: all 0.3s linear;
  cursor: pointer;
}
.category-card:hover {
  transform: scale(1.01);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  background-color: #233329;
  background-image: linear-gradient(360deg, green, #63d471, green);
  color: #fff;
}
.category-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.img {
  float: left;
  padding: 10px;
  width: 120px;
  height: 120px;
}
</style>

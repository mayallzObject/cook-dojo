<template>
  <router-link
    :to="{
      name: 'catMeals',
      params: { names: cat.strCategory }
    }"
    class="category-link"
  >
    <div class="category-card">
      <h4>{{ cat.strCategory }}</h4>
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
* {
  box-sizing: border-box;
}
.category-card {
  box-sizing: border-box;
  background-color: #233329;
  background-image: linear-gradient(160deg, green 10%, #63d471, green 94%);
  color: #fff;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  max-width: 310px;
  margin: 20px;
  padding: 20px;
  height: auto; /*All cards have the same height*/
  transition: all 0.3s linear;
  cursor: pointer;
  transition: all 0.3s linear;
  cursor: pointer;
}

.category-card:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 21px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  background-color: #233329;
  background-image: linear-gradient(160deg, green 0%, #63d471, green 24%);
  color: #fff;
}
.category-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.img {
  align-items: left;
  width: 100%;
  max-width: 200px;
  height: auto;
}
</style>

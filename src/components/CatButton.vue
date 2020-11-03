<template>
  <div class="flex-container">
    <router-link
      :to="{ name: 'catMeals', params: { names: cat.strCategory } }"
      tag="button"
      >{{ cat.strCategory }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CatButton",
  props: {
    cat: Object
  }
})
</script>

<style scoped>
.flex-container {
  font-size: 20px;
  display: inline;
  line-height: 45px;
  text-align: center;
  background-color: black;
}
</style>

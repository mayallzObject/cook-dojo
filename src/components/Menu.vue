<template>
  <div id="nav" class="nav">
    <nav>
      <div class="btn-group">
        <router-link :to="{ name: 'home' }" tag="button">Home</router-link>
        <router-link :to="{ name: 'randomizer' }" tag="button"
          >Random</router-link
        >
        <router-link :to="{ name: 'categories' }" tag="button"
          >Categories</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Menu"
})
</script>

<style scoped>
.nav {
  padding: 12px;
  text-align: center;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: #21d190;
  background-image: linear-gradient(315deg, #21d190 0%, #d65bca 74%);
}
</style>

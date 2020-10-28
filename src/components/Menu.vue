<template>
  <div id="nav" class="nav">
    <nav>
      <div class="nav-link">
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
  background-color: #333;
  position: fixed;
  z-index: 999;
  top: 0;
  margin-bottom: 20px;
  overflow: visible;
}
.nav-link {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
</style>

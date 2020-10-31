<template>
  <div id="nav" class="nav">
    <nav>
      <div class="nav-link">
        <router-link class="button" :to="{ name: 'home' }" tag="button"
          >Home</router-link
        >
        <router-link class="button" :to="{ name: 'randomizer' }" tag="button"
          >Random</router-link
        >
        <router-link class="button" :to="{ name: 'categories' }" tag="button"
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
  text-align: center;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: #4caf50;
}
.nav-link {
  display: flex;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  background-color: #4caf50;
}
.button {
  text-align: center;
  margin: 1px;
  background-color: white;
  border: 1px solid white;
  color: #4caf50;
  padding: 10px 24px;
  cursor: pointer;
}
</style>

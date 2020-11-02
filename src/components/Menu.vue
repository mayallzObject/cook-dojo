<template>
  <div id="nav" class="nav">
    <nav>
      <div class="btn-group">
        <router-link :to="{ name: 'home' }" tag="button">Home</router-link>
        <router-link :to="{ name: 'randomizer' }" tag="button"
          >Randomizer</router-link
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
  justify-content: center;
  padding: 12px;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
}
.btn-group button {
  font-weight: bold;
  font-size: 14px;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
  border: 1px solid green;
  color: white;
  padding: 13px 20px;
  cursor: pointer;
  outline: none;
}
.btn-group button:hover {
  background-color: #63d471;
  background-image: linear-gradient(
    360deg,
    #63d471 0%,
    #233329 14%,
    #63d471 99%
  );
  color: white;
}
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}
</style>

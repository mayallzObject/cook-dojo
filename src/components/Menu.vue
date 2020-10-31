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
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
}
.btn-group button {
  font-weight: bold;
  font-size: 12px;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
  border: 1px solid green;
  color: white;
  padding: 12px 34px;
  cursor: pointer;
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:hover {
  background-color: #63d471;
  background-image: linear-gradient(
    360deg,
    #63d471 0%,
    #233329 14%,
    #63d471 99%
  );
}
</style>

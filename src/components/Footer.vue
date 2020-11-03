<template>
  <div class="footer">
    <div class="container">
      <p class="sub-header">Quick Links</p>
      <router-link class="footer-link" :to="{ name: 'home' }">
        Homepage
      </router-link>
      <router-link class="footer-link" :to="{ name: 'randomizer' }">
        Random meals
      </router-link>
      <router-link class="footer-link" :to="{ name: 'categories' }">
        Explore our categories
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Footer"
})
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}
.footer {
  position: sticky;
  width: 100%;
  z-index: 999;
  bottom: 0;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
}
.footer-link {
  font-family: "Merienda", Helvetica, Arial;
  text-decoration: none;
  color: #e9f1b8;
}
.sub-header {
  color: #374202;
  font-weight: bold;
}
</style>

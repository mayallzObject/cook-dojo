<template>
  <div class="footer">
    <div class="container">
      <h5>Quick links</h5>
      <router-link class="footer-link" :to="{ name: 'home' }">
        Homepage
      </router-link>

      <router-link class="footer-link" :to="{ name: 'randomizer' }">
        Randomizer
      </router-link>

      <router-link class="footer-link" :to="{ name: 'categories' }">
        Categories
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
.footer {
  position: sticky;
  align-items: left;
  z-index: 999;
  padding: 20px;
  bottom: 0;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
}
.footer-link {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}
.container {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
}
.container > div {
  text-align: center;
}
</style>

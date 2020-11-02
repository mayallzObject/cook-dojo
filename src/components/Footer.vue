<template>
  <div class="footer">
    <div class="container">
      <router-link class="footer-link" :to="{ name: 'home' }">
        Homepage
      </router-link>
    </div>
    <div>
      <router-link class="footer-link" :to="{ name: 'randomizer' }">
        Randomizer
      </router-link>
    </div>
    <div>
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
  z-index: 999;
  padding: 3rem;
  position: sticky;
  bottom: 0;
  align-items: left;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
}
.footer-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
.container {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.container > div {
  text-align: left;
}
</style>

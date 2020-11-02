<template>
  <div class="footer">
    <div>
      <h1>UseFull links</h1>
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
  display: block;
  justify-content: flex-start;
  z-index: 999;
  position: sticky;
  bottom: 0;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
  text-align: center;
}
.footer-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
</style>

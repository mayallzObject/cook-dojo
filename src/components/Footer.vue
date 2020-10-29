<template>
  <div class="footer">
    <div>
      <router-link class="footer-link" :to="{ name: 'home' }">
        Homepage
      </router-link>
    </div>
    <div>
      <router-link class="footer-link" :to="{ name: 'categories' }">
        Categories
      </router-link>
    </div>
    <div>
      <router-link class="footer-link" :to="{ name: 'randomizer' }">
        Randomizer
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Footer",
  props: [""]
})
</script>
<style scoped>
.footer {
  width: 100%;
  z-index: 999;
  position: fixed;
  bottom: 0;
  background-color: red;
  color: white;
}
.footer-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
</style>

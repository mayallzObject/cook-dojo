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
  position: sticky;
  bottom: 0;
  background-color: #4caf50;
  text-align: center;
}
.footer-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  background-image: linear-gradient(#4caf50, yellow);
}
</style>

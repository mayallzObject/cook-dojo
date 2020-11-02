<template>
  <router-link :to="{ name: 'home' }">
    <button class="button">
      Back to Homepage
    </button>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "HomeButton"
})
</script>

<style scoped>
.home-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
</style>

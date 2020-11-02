<template>
  <div class="button">
    <router-link class="home-link" :to="{ name: 'home' }"
      >Back to Homepage</router-link
    >
  </div>
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

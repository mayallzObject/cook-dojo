<template>
  <div id="nav" class="nav">
    <nav>
      <router-link :to="{ name: 'home' }" tag="button">Home</router-link>
      <router-link :to="{ name: 'randomizer' }" tag="button"
        >Random</router-link
      >
      <router-link :to="{ name: 'categories' }" tag="button"
        >Categories</router-link
      >
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #000;
}
</style>

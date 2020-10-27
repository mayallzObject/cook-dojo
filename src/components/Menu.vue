<template>
  <div id="nav" class="nav">
    <nav>
      <div class="nav-link">
        <router-link :to="{ name: 'home' }" tag="button">Home</router-link>
      </div>
      <div class="nav-link">
        <router-link :to="{ name: 'randomizer' }" tag="button"
          >Random</router-link
        >
      </div>
      <div class="nav-link">
        <router-link :to="{ name: 'categories' }" tag="button"
          >Categories</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style scoped>
.nav {
  width: 20%;
  height: 100vh auto;
  background-color: #192a56;
  top: 0;
  position: sticky;
}
.nav-link {
  margin-top: 20px;
  background-color: #192a56;
  color: #fff;
}
</style>

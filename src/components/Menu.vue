<template>
  <div id="nav" class="nav">
    <nav>
      <div class="nav-btn-group">
        <router-link :to="{ name: 'home' }" tag="button">Home</router-link>
        <router-link :to="{ name: 'randomizer' }" tag="button"
          >Randomizer</router-link
        >
        <router-link :to="{ name: 'categories' }" tag="button"
          >Categories</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Menu"
})
</script>

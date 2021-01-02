<template>
  <div class="app">
    <Navigation />

    <Header />

    <router-view />
    <footer class="footer">
      <div class="row">
        <Footer />
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Navigation from "@/components/Navigation.vue"

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default Vue.extend({
  components: {
    Navigation,
    Footer,
    Header
  }
})
</script>
<style>
.app {
  background-color: lightblue;
}
</style>

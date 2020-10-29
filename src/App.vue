<template>
  <div>
    <div id="app">
      <div>
        <Menu />
      </div>
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Menu from "@/components/Menu.vue"
import Footer from "@/components/Footer.vue"

export default Vue.extend({
  components: {
    Menu,
    Footer
  }
})
</script>

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
}
</style>

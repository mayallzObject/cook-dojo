<template>
  <div>
    <div id="app">
      <div>
        <Menu />
        <router-view />
      </div>
    </div>
    <div>
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
  height: 100vh;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 auto;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  margin-top: 100px;
  text-align: center;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
a {
  color: #39b982;
  font-weight: 600;
  background-color: transparent;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}
h1 {
  font-size: 50px;
  font-weight: 700;
}
h2 {
  font-size: 38px;
  font-weight: 700;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
h4 {
  font-size: 21px;
  font-weight: 700;
}
h5 {
  font-size: 16px;
  font-weight: 700;
}
h6 {
  font-size: 15px;
  font-weight: 700;
}
</style>

<template>
  <div>
    <div id="app">
      <Menu />
      <div>
        <Header />
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
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default Vue.extend({
  components: {
    Menu,
    Footer,
    Header
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
  height: 100%;
  width: 100%;
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  display: flex;
  margin: 120px 0;
  text-align: center;
  min-height: 100vh;
}

.header {
  text-align: center;
  padding: 20px;
}
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.flex-container > div {
  text-align: center;
  flex-grow: 4;
}
.btn-group button {
  font-size: 15px;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
  border: 1px solid green;
  color: white;
  padding: 13px 27px;
  cursor: pointer;
  outline: none;
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:hover {
  background-color: #166d3b;
  background-image: linear-gradient(360deg, #166d3b 0%, #233329 90%);
}
.header {
  font-size: 20px;
  font-weight: 700;
}

.button {
  font-weight: bold;
  font-size: 18px;
  border-radius: 45px;
  margin-bottom: 50px;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #63d471, #233329 0%, #63d471 94%);
  border: 1px solid green;
  color: #fff;
  padding: 20px 67px;
  outline: none;
  cursor: pointer;
}
.button:after {
  content: "";
  clear: both;
}
.button:hover {
  background-color: #233329;
  background-image: linear-gradient(360deg, green, #63d471 0%, green 50%);
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

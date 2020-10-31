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
.header {
  text-align: center;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.flex-container > div {
  text-align: center;
}
.btn-group button {
  margin-left: 5px;
  font-weight: bold;
  font-size: 12px;
  background-image: linear-gradient(#4caf50, yellowgreen);
  border: 1px solid green;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:hover {
  background-image: linear-gradient(yellowgreen, #4caf50);
}
.header {
  font-size: 40px;
  font-weight: 700;
}

.button {
  font-weight: bold;
  font-size: 20px;
  margin: 1px;
  background-color: #63d471;
  background-image: linear-gradient(160deg, #233329 0%, #63d471 74%);
  border: 1px solid green;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
}
.button:after {
  content: "";
  clear: both;
  display: table;
}
.button:hover {
  background-color: #63d471;
  background-image: linear-gradient(320deg, #233329 0%, #63d471 74%);
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

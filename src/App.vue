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
  width: 100% auto;
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  display: flex;
  margin-top: 200px;
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
  font-size: 10px;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
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
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
}
.header {
  font-size: 20px;
  font-weight: 700;
}

.button {
  font-weight: bold;
  font-size: 20px;
  margin: 1px;
  background-color: #99201c;
  background-image: linear-gradient(360deg, #99201c 0%, #f56545 74%);
  border: 1px solid green;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
}
.button:after {
  content: "";
  clear: both;
}
.button:hover {
  background-color: #aff6cf;
  background-image: linear-gradient(
    360deg,
    #aff6cf 0%,
    #9f98e8 14%,
    #aff6cf 99%
  );
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

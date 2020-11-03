<template>
  <div>
    <Menu />
    <div id="app">
      <div class="container">
        <Header />
      </div>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
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
@import url("https://fonts.googleapis.com/css2?family=Merienda&display=swap");
body {
  margin: 0;
  width: 100%;
  line-height: 1.5;
  font-family: "Open Sans", sans-serif;
}
#app {
  margin: 120px 0;
  min-height: 100vh;
  display: flex-box;
  text-align: center;
}
/* Global Titles */
.title {
  margin: 0;
  font-size: 80px;
  font-family: "Merienda", Helvetica, Arial;
  background-color: #63d471;
  background: linear-gradient(360deg, #233329 0%, #63d471 74%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sub-title {
  font-family: "Merienda", Helvetica, Arial;
  background-color: #63d471;
  background: linear-gradient(360deg, #233329 0%, #63d471 74%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mealcard-title {
  font-family: "Merienda", Helvetica, Arial;
}
/* Global Containers */
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.flex-container > div {
  text-align: center;
}
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.container > div {
  text-align: center;
}
/* Global Buttons */
/* categories buttons */
.btn-group button {
  font-size: 15px;
  padding: 13px 27px;
  color: white;
  font-weight: 700;
  font-family: "Merienda", Helvetica, Arial;
  background-color: #ff7878;
  background-image: linear-gradient(315deg, green 0%, #74d680 95%);

  border: 1px solid white;
  outline: none;
  cursor: pointer;
}
.btn-group button:hover {
  background-color: #ff7878;
  background-image: linear-gradient(35deg, green 0%, #74d680 95%);
  border-color: white;
}
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}
.button {
  margin-top: 50px;
  font-weight: bold;
  font-size: 18px;
  padding: 20px 67px;
  border-radius: 45px;
  background-color: #233329;
  background-image: linear-gradient(180deg, #74d680 0%, #378b29 64%);
  color: #fff;
  border: 1px solid green;
  outline: none;
  cursor: pointer;
}
.button:after {
  content: "";
  clear: both;
}
.button:hover {
  background-color: #63d471;
  background-image: linear-gradient(360deg, #74d680 0%, #378b29 74%);
  color: #fff;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
/* Navigation */
.nav {
  justify-content: center;
  padding: 12px;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
}
.nav-btn-group button {
  font-weight: bold;
  font-size: 14px;
  padding: 13px 20px;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
  border: 1px solid green;
  color: white;
  cursor: pointer;
  outline: none;
}
.nav-btn-group button:hover {
  background-color: #63d471;
  background-image: linear-gradient(
    360deg,
    #63d471 0%,
    #233329 14%,
    #63d471 99%
  );
}
.nav-btn-group:after {
  content: "";
  clear: both;
  display: table;
}
/* Footer */
.footer {
  position: sticky;
  align-items: left;
  z-index: 999;
  padding: 20px;
  bottom: 0;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
}
.footer-link {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}
/* Global Transitions */
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-down-enter {
  transform: translateY(-10px); /* start 10px up*/
  opacity: 0;
}

.slide-down-enter-active {
  transition: all 0.6s ease;
}
/* Global Tags */
a {
  color: #3966b9;
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

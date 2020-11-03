<template>
  <div>
    <div id="app">
      <Menu />
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
@import url("https://fonts.googleapis.com/css2?family=Merienda&display=swap");
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-size: 16px;
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
.button-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
.btn-group button {
  font-size: 15px;
  padding: 13px 27px;
  color: white;
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 0%, #63d471 74%);
  border: 1px solid green;
  outline: none;
  cursor: pointer;
}

.btn-group button:hover {
  background-color: #63d471;
  background-image: linear-gradient(360deg, #233329 5%, #63d471 65%);
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

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-up-enter {
  transform: translateY(-10px); /* start 10px down*/
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.6s ease;
}
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

<template>
  <div class="header">
    <div class="header__logo-box">
      <img src="../assets/logo.png" alt="Logo" class="header__logo" />
    </div>
    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Cook Dojo</span>
        <span class="heading-primary--sub">cook like a pro</span>
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Header"
})
</script>

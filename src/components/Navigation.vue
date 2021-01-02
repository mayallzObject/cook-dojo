<template>
  <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link to="/" class="navigation__link"
            ><span>01</span>Homepage</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/categories" class="navigation__link"
            ><span>02</span>Categories</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link to="/randomizer" class="navigation__link"
            ><span>03</span>Randomizer</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Navigation"
})
</script>

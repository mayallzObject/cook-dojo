<template>
  <div>
    <div class="row">
      <div class="col-1-of-2">
        <h2>Quick Links</h2>
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'home' }">
                Home
              </router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'categories' }">
                categories
              </router-link>
            </li>
            <li class="footer__item">
              <router-link class="footer__link" :to="{ name: 'randomizer' }">
                randomizer
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-1-of-2">
        <h2>Project</h2>
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a
                href="https://github.com/mayallzObject/my-app"
                target="_blank"
                rel="noreferrer"
                class="footer__link"
              >
                GitHub
              </a>
            </li>
            <li class="footer__item">
              <a
                href="https://www.themealdb.com/api.php"
                target="_blank"
                rel="noreferrer"
                class="footer__link"
              >
                REST Api link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Footer"
})
</script>

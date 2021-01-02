<template>
  <div class="cat-card">
    <router-link
      :to="{
        name: 'catMeals',
        params: { names: cat.strCategory }
      }"
      class="cat-card__link"
    >
      <h5 class="cat-card__heading">{{ cat.strCategory }}</h5>
      <img class="cat-card__img" :src="cat.strCategoryThumb" alt="Image" />
      <div class="cat-text">{{ cat.strCategoryDescription }}</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapGetters, mapState } from "vuex"

export default Vue.extend({
  name: "CategoryCard",
  props: {
    cat: Object
  },
  computed: {
    ...mapGetters(["catLength"]),
    ...mapState(["categories"])
  }
})
</script>

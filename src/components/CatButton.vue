<template>
  <div class="flex-container">
    <router-link
      :to="{ name: 'CatMeals', params: { names: cat.strCategory } }"
      tag="button"
      >{{ cat.strCategory }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CatButton",
  props: {
    cat: Object
  }
})
</script>

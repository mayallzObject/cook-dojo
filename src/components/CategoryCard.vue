<template>
  <div class="meal-card">
    <p>{{ cat.strCategory }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"

export default Vue.extend({
  name: "CategoryCard",
  props: {
    cat: Object
  },
  computed: mapState(["meals"])
})
</script>

<style scoped></style>

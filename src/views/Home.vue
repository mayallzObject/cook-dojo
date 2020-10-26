<template>
  <div class="home">
    <MealCard />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"

export default Vue.extend({
  name: "Home",
  components: {
    MealCard
  }
})
</script>

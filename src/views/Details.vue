<template>
  <div>
    <DetailsCard v-for="meal in mealID" :key="meal.id" :meal="meal" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
import DetailsCard from "@/components/DetailsCard.vue"

export default Vue.extend({
  name: "Details",
  props: ["id"],
  components: {
    DetailsCard
  },
  created() {
    this.$store.dispatch("fetchMeal", this.id)
  },
  computed: mapState(["mealID"])
})
</script>

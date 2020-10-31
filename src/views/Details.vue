<template>
  <div>
    <DetailsCard v-for="meal in mealID" :key="meal.id" :meal="meal" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState, mapGetters } from "vuex"
import DetailsCard from "@/components/DetailsCard.vue"

export default Vue.extend({
  name: "Details",
  props: ["id"],
  components: {
    DetailsCard
  },
  data() {
    return {
      limitationList: 5
    }
  },
  created() {
    this.$store.dispatch("fetchMeal", this.id)
    this.$store.dispatch("fetchMeals")
  },
  computed: {
    ...mapGetters(["getByCategory"]),
    ...mapState(["mealID", "meals"])
  }
})
</script>

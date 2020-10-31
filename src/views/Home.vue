<template>
  <div>
    <button class="button" v-on:click="show = !show">
      Toggle
    </button>
    <div v-if="show" class="btn-group">
      <CatButton v-for="cat in categories" :key="cat.idCategory" :cat="cat" />
    </div>
    <div class="header">Latest Meals</div>
    <select name="" id="">
      <option value=""> Hallo</option>
    </select>
    <div class="flex-container">
      <MealCard
        v-for="meal in sortedTodos(strMeal)"
        :key="meal.strMeal"
        :meal="meal"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import MealCard from "@/components/MealCard.vue"
import CatButton from "@/components/CatButton.vue"
import { mapGetters, mapState } from "vuex"

export default Vue.extend({
  name: "Home",
  components: {
    MealCard,
    CatButton
  },
  data() {
    return { show: false }
  },
  created() {
    this.$store.dispatch("fetchMeals", {})
    this.$store.dispatch("fetchCategories", {})
  },
  computed: {
    ...mapGetters(["sortedTodos"]),
    ...mapState(["meals", "categories"])
  },
  methods: {}
})
</script>

<style scope>
.header {
  text-align: center;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.flex-container > div {
  text-align: center;
}
.btn-group button {
  margin: 1px;
  background-color: #4caf50;
  border: 1px solid green;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
</style>

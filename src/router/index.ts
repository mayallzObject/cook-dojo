import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Details from "@/views/Details.vue"
import Randomizer from "@/views/Randomizer.vue"
import CatMeals from "@/views/CatMeals.vue"
import Categories from "@/views/Categories.vue"
import Home from "@/views/Home.vue"

Vue.use(VueRouter)

// Use lazzy routing
function loadView(view: string) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/details/:id",
    name: "details",
    component: Details,
    props: true
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories
  },
  {
    path: "/categories/:names",
    name: "catMeals",
    component: CatMeals,
    props: true
  },
  {
    path: "/randomizer",
    name: "randomizer",
    component: Randomizer
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router

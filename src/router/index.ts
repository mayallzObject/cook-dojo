import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Details from "@/views/Details.vue"

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
    component: loadView("Home")
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
    component: loadView("Categories")
  },
  {
    path: "/categories/:names",
    name: "catMeals",
    component: loadView("CatMeals"),
    props: true
  },
  {
    path: "/randomizer",
    name: "randomizer",
    component: loadView("Randomizer")
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

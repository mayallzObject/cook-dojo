import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

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
    component: loadView("Details"),
    props: true
  },
  {
    path: "/categories",
    name: "categories",
    component: loadView("Categories")
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
  routes
})

export default router

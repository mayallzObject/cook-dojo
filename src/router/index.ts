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
    name: "Home",
    component: loadView("Home")
  },
  {
    path: "/details/:id",
    name: "Details",
    component: loadView("Details"),
    props: true
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router

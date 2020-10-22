import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Open from "../views/Open.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Open",
    component: Open,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>import("../views/About.vue"),
  },
  {
    path: "/project/",
    name: "Project",
    component: () => import("../views/Project.vue"),
  },
];

const router = new VueRouter({
  routes
})

export default router

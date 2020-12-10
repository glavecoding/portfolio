import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Open from "../views/Open.vue";
// import Project from "../views/Project.vue";
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
    component: () => import("../views/About.vue"),
  },
  {
    path: "/project/:order/:name",
    name: "Project",
    component: () => import("../views/Project.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router

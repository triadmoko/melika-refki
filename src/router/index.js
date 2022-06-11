import { createRouter, createWebHistory } from "vue-router";
import CoverView from "../views/CoverView.vue";
import CoverNameView from "../views/CoverNameView.vue";
import Undangan from "../views/UndanganView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CoverView,
    },
    {
      path: "/:name",
      name: "nama",
      component: CoverNameView,
    },
    {
      path: "/undang",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Undangan,
    },
  ],
});

export default router;

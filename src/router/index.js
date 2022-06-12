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
      path: "/:name/:partner",
      name: "nama",
      component: CoverNameView,
    },
    {
      path: "/undang",
      name: "undangan",
      component: Undangan,
    },
  ],
});

export default router;

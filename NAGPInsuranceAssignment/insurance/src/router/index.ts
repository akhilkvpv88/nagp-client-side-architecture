import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/insurance-details",
      name: "insurance-details",
      component: () => import("insurance_details/App"),
      children: [
        {
          path: "/:id",
          name: "detailsWithId",
          component: () => import("insurance_details/App"),
        },
      ],
    },

    {
      path: "/payments",
      name: "payments",
      component: () => import("insurance_payments/App")
    },
  ],
});

export default router;

import { type RouteRecordRaw } from "vue-router";

const MainRoute: RouteRecordRaw = {
  path: "/",
  name: "main",
  meta: {
    layout: "main",
  },
  component: () => import("@/pages/main-page.vue"),
};

export const allRoutes: RouteRecordRaw[] = [
  MainRoute,
];

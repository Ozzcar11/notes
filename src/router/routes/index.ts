import { type RouteRecordRaw } from "vue-router";

export const mainRoute: RouteRecordRaw = {
  path: "/",
  name: "main",
  meta: {
    layout: "main",
  },
  component: () => import("@/pages/main-page.vue"),
};

export const allRoutes: RouteRecordRaw[] = [
  mainRoute,
];

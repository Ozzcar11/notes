import { type RouteRecordRaw } from "vue-router";
import { authRoutes } from "./auth";

const MainRoute: RouteRecordRaw = {
  path: "/",
  name: "main",
  meta: {
    layout: "main",
  },
  component: () => import("@/pages/notes/notes-page.vue"),
};

export const allRoutes: RouteRecordRaw[] = [
  MainRoute,
  ...authRoutes,
];

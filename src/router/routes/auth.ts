import { type RouteRecordRaw } from "vue-router";

export const loginRoute: RouteRecordRaw = {
  name: "login",
  path: "/login",
  meta: {
    layout: "auth",
  },
  component: () => import("@/pages/auth/login-page.vue"),
};

export const authRoutes: RouteRecordRaw[] = [loginRoute];
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "LetsTry",
    component: () => import("../views/mainView.vue"),
    meta: {
      title: "LetsTry",
    },
  },
  {
    path: "/about",
    name: "LetsTry",
    component: () => import("../views/aboutUs.vue"),
    meta: {
      title: "關於我們",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;

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

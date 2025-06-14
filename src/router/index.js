import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/products",
    name: "products_category",

    component: () => import("@/views/productsCategory.vue"),
  },
  {
    path: "/products/product-details/:productId",
    name: "products_details",
    component: () => import("@/views/ProductsDetails"),
  },
  {
    path: "/cart-page",
    name: "cart_page",
    component: () => import("@/views/CartPage"),
  },
  {
    path: "/checkout",
    name: "check_out",
    component: () => import("@/views/CheckOut"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

import VueRouter from "vue-router";
import CustomPage from "./../components/CustomPage";
import Home from "./../components/Home";
import PageOne from "./../components/PageOne";
import ProductDetails from "./../components/ProductDetails";

// const routes = [{ path: "/page-1", component: PageOne }];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/page-1", component: PageOne, name: "PageOne" },
    {
      path: "/page/:slug",
      component: CustomPage,
      name: "CustomPage",
      meta: { sfsdf: "sdfsd", sdfsd: "sdfsdf" },
    },
    {
      path: "/product/:slug",
      component: ProductDetails,
      name: "ProductDetails",
      meta: { sfsdf: "sdfsd", sdfsd: "sdfsdf" },
    },
  ],
});

export default router;

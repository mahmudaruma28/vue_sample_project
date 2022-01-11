import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router/index";
import store from "./stores/store";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

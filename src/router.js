import Vue from "vue";
import Router from "vue-router";
import Demo1 from "./views/example/demo1.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "demo1",
      component: Demo1
    }
  ]
});

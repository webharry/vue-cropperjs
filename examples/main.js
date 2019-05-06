import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Crop from "../packages/index.js"


Vue.config.productionTip = false;
Vue.use(Crop)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store/index.js";
import { userData } from "./store/login";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  axios,
  created() {
    localStorage.setItem("userData", JSON.stringify(userData))
  },
  render: h => h(App),
  store
}).$mount("#app");

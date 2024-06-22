import { createApp } from "vue";
import { loadFonts } from "./plugins/webfontloader";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
// import store from "./store";
import vuetify from "./plugins/vuetify";

const HOST = process.env.VUE_APP_HOST || "localhost";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://" + HOST + ":5173/";
axios.defaults.headers.post["Content-Type"] = "application/json";

loadFonts();

// createApp(App).use(router).use(store).use(vuetify).mount("#app");
createApp(App).use(router).use(vuetify).mount("#app");

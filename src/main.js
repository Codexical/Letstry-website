import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import axios from "axios";

const HOST = process.env.VUE_APP_HOST || "localhost";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://" + HOST + ":5173/";
axios.defaults.headers.post["Content-Type"] = "application/json";

loadFonts();

// createApp(App).use(router).use(store).use(vuetify).mount("#app");
createApp(App).use(router).use(vuetify).mount("#app");

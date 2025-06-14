import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// pinia config
// pinia instad of vuex
import { createPinia } from "pinia";

// Emitter Config
// mitt >> is a table  it is give me the ability to
import mitt from "mitt";
const Emitter = mitt();

// Swiper config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
// import Swiper from "swiper";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");

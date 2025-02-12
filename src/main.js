import Vue from "vue";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Vuebar from "vuebar";
import VueScrollmagic from "vue-scrollmagic";
import panZoom from "vue-panzoom";
import removeES6Polyfill from "element-remove";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BezierPlugin } from "gsap";
gsap.registerPlugin(ScrollTrigger);

Vue.use(VueScrollmagic);
var VueScrollTo = require("vue-scrollto");


Vue.use(Vuebar);
Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  container: "body",
  duration: 100,
  lazy: false,
  easing: 'ease-in-out',
  offset: -150,
  cancelable: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.use(panZoom);
Vue.use(removeES6Polyfill);

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}

new Vue({
  router,
  store,
  render: h => h(App),
  created() {}
}).$mount("#app");

sync(store, router);



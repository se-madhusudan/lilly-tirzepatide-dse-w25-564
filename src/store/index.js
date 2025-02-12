import Vue from "vue";
import Vuex from "vuex";
import userAgent from "./modules/userAgent";
import animationsData from "./animationsData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isScrollLock: false,
    mobileMenuState: false,
    activeSection: 0,
    urls: {
      PP: {
        link: "https://www.haymarketmediaus.com/haymarket-media-inc-privacy-policy/",
        text: "Privacy Policy",
      },
      TC: {
        link: "https://www.haymarketmediaus.com/haymarket-media-inc-terms-and-conditions-of-service/",
        text: "Terms & Conditions",
      }
    },
    animationsData,
    controllerExist: false,

    el: '#nav',
    mainMenu: [
      {
        id: 1,
        title: "Why weight matters for patients with T2D",
        anchorRef: "#Matters",
        sectionName: "Why weight matters for patients with T2D",
        Subsection: "-",
        dataLayerSectionName: "Why Weight Matters"
      },
      {
        id: 2,
        title: "Barriers to managing weight in patients with T2D",
        anchorRef: "#Barriers",
        sectionName: "Barriers to managing weight in patients with T2D",
        Subsection: "-",
        dataLayerSectionName: "Barriers to Managing"
      },
      {
        id: 3,
        title: "Importance of early glycemic control and weight management in T2D",
        anchorRef: "#Importance",
        sectionName: "Importance of early glycemic control and weight management in T2D",
        Subsection: "-",
        dataLayerSectionName: "Importance of Early Glycemic Control"
      },
      {
        id: 4,
        title: "Resource Hub",
        anchorRef: "#Resource",
        sectionName: "Resource Hub",
        Subsection: "-",
        dataLayerSectionName: "Resource Hub"
      },

    ]
  },

  modules: {
    userAgent,
  },
  mutations: {
    SET_SCROLL_CONTROLLER_STATE(state, value) {
      state.controllerExist = value;
    },
    TOGGLE_MOBILE_MENU(state, value) {
      state.mobileMenuState = value;
    },
    SET_ACTIVE_SECTION(state, value) {
      state.activeSection = value;
    },
  },
});

import isMobile from "ismobilejs";
import windowSize from "get-window-size";
import browser from "browser-detect";

const userAgent = {
  state: {
    window: {
      width: windowSize().width,
      height: windowSize().height
    },
    device: {
      isPhone: isMobile.phone,
      isTablet: isMobile.tablet,
      isMobile: isMobile.any,
      isTouch: ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
    },
    orientation: null,
    browser: {
      name: browser().name,
      version: browser().version
    },
    screentest: false,
    isScrollLock: false
  },
  mutations: {
    DETECT_ORIENTATION(state, payload) {
      if (payload) {
        state.orientation = "landscape";
      } else {
        state.orientation = "portrait";
      }
    },
    UPDATE_WINDOW_PARAMS(state, payload) {
      state.window = payload;
      state.device.isMobile = payload.width < 1024;
    },
    UPDATE_SCREENTEST: (state, payload) => {
      state.screentest = payload;
    },
    UPDATE_LOCK_STATE: (state, payload) => {
      state.isScrollLock = payload;
    }
  }
};

export default userAgent;

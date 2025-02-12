<template>
  <div id="app" :class="{ screentest: userAgent.screentest, isIE: isIE}">
    <section :class="{ 'main-wrapp': true}">
      <header>
        <header-top />
        <header-block />
      </header>
      <main>
        <router-view />
      </main>
      <rotate-lock v-if="userAgent.orientation === 'landscape' && userAgent.device.isPhone"></rotate-lock>
      <footer>
        <brand-footer />
      </footer>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import handleResize from "@/mixins/handleResize";
import handleOrientation from "@/mixins/handleOrientation";
import fixSafariOffset from "@/mixins/fixSafariOffset";
import { NoParentScrollMixin } from "@/mixins/NoParentScrollMixin";
import HeaderBlock from "@/Components/Layouts/Header/Header";
import HeaderTop from "@/Components/Layouts/Header/HeaderTop";
import BrandFooter from "@/Components/Layouts/Brand/BrandFooter";
import rotateLock from "@/Components/common-blocks/rotate-lock/rotate-lock";
import ClickAnalytics from "@/mixins/ClickAnalytics";
import ScrollTrigger from "gsap/ScrollTrigger";
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: "App",
  components: {
    "rotate-lock": rotateLock,
    "header-top": HeaderTop,
    "header-block": HeaderBlock,
    BrandFooter,
    basePath: process.env.BASE_URL,
  },
  beforeMount() {
    this.$store.commit(
      "UPDATE_SCREENTEST",
      this.$route.query.screentest || process.env.VUE_APP_SCREENTEST
    );
  },

  mixins: [
    handleResize,
    handleOrientation,
    fixSafariOffset,
    NoParentScrollMixin,
    ClickAnalytics,
  ],

  computed: {
    ...mapState(["userAgent"]),
    isIE() {
      return this.userAgent.browser.name === "ie";
    },
    orientation() {
      return this.userAgent.orientation;
    },
    brandFooterHeight() {
      return this.userAgent.width < 1024 ? 38 : 50;
    },
  },
  methods: {
    closeMenu() {
      this.$store.commit("TOGGLE_MOBILE_MENU", false);
    },
  },
  mounted() {
    var sectionviewarray = [
      ".heroSection",
      "#Matters",
      "#Barriers",
      "#Importance",
      "#Resource",
      "#brandFooter"
    ];
    var sectionviewpagename = [
      "Overview",
      "Why Weight Matters",
      "Barriers to Managing",
      "Importance of Early Glycemic Control",
      "Resource Hub"
    ];
    var sectionviewSECTIONname = ["-", "-", "-"];
    for (let i = 0; i < sectionviewarray.length; i++) {
      if(i == 0){
        ScrollTrigger.create({
          trigger: sectionviewarray[i],
          start: "center 30%",
          end: "center 30%",
          toggleActions: "restart pause reverse pause",
          onEnterBack: () => {
            this.sectionClickDataLayer(sectionviewpagename[i],'section-view', sectionviewSECTIONname[i]);
          },
          onEnter: () => {
            this.sectionClickDataLayer(sectionviewpagename[i],'section-view', sectionviewSECTIONname[i]);
          },
        });
      } else {
        ScrollTrigger.create({
          trigger: sectionviewarray[i],
          start: "top 30%",
          end: "top 30%",
          toggleActions: "restart pause reverse pause",
          onEnterBack: () => {
            this.sectionClickDataLayer(sectionviewpagename[i],'section-view', sectionviewSECTIONname[i]);
          },
          onEnter: () => {
            this.sectionClickDataLayer(sectionviewpagename[i],'section-view', sectionviewSECTIONname[i]);
          },
        });
      }
    }
  },
};
</script>

<style lang="scss" src="./Styles/Main.scss"></style>
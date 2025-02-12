<template src="./Home.html"></template>
<script>
import { mapState } from "vuex";
import ScrollDepthAnalytics from "@/mixins/ScrollDepthAnalytics";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroSection from "@/Components/Blocks/HeroSection/HeroSection";
import WeightMatters from "@/Components/Blocks/WeightMatters/WeightMatters.vue";
import Barriers from "@/Components/Blocks/Barriers/Barriers.vue";
import ResourceHub from "@/Components/Blocks/ResourceHub/ResourceHub.vue";
import WeightManagement from "@/Components/Blocks/WeightManagement/WeightManagement.vue";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
export default {
  name: "HomePage",
  components: {
    HeroSection,
    WeightMatters,
    Barriers,
    WeightManagement,
    ResourceHub,
  },
  data() {
    return {
      heroData: {
        title: 'Glycemic Control and Excess Weight in Type 2 Diabetes: Expert Perspectives',
        des: 'Learn how addressing excess weight can support efforts to achieve glycemic control in patients with type 2 diabetes.<sup>1</sup>',
        bgImage: require('@/Assets/Img/HeroSection/hero-background-lg.png'),
      },
      isActiveOverlay: false,
      deadInteractivity: true,
      currentSection: 0,
      sections: {},
      sectionScene: [],
      options: {
        container: "body",
        easing: "ease-in",
        offset: 0,
      },
      publicPath: process.env.BASE_URL,
      microbeAnimationScene_1: {},
      popupTimer: null,
      backplateTimer: null,
      resizeTimer: null,
      initTileProps: [],
      postFontSize: 1,
    };
  },

  computed: {
    ...mapState([
      "userAgent",
      "urls",
      "animationsData",
      "controllerExist",
      "mainMenu",
      "activeSection",
    ]),
    isIE() {
      return this.userAgent.browser.name === "ie";
    },
    routes() {
      return this.$router.options.routes;
    },
  },

  methods: {
  },

  mounted() { },

  mixins: [ScrollDepthAnalytics],
};
</script>

<style lang="scss" src="./Home.scss" scoped></style>
<template>
  <div class="headerTopWrap">
    <div :class="{ headerTop: true, '': this.isScrolled }">
      <img src="@/Assets/Img/logos/ea-logo.svg" alt="Endocrinology Advisor Logo" />
      <img src="@/Assets/Img/logos/ep-logo.svg" alt="Expert Perspectives Logo" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderTop",
  components: {},
  data() {
    return {
      isOpen: false,
      isScrolled: false,
      options: {
        container: "body",
        easing: "ease-in",
        offset: -150,
      },
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    };
  },
  computed: {
    ...mapState(["userAgent", "urls"]),
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {},
  watch: {},

};
</script>

<style lang="scss" src="./HeaderTop.scss" scoped></style>
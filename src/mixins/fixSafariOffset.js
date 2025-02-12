const fixSafariOffset = {
  methods: {
    singlePixelScroll() {
      let topOffset =
          window.scrollY ||
          window.pageYOffset ||
          document.body.scrollTop +
            ((document.getElementById("app") &&
              document.getElementById("app").scrollTop) ||
              0);
      setTimeout(function() {
        window.scrollTo(0, topOffset);
        document.documentElement.style.height = '101%';
        setTimeout(function() {
          document.documentElement.style.height = '100%';
        }, 50);
      }, 500);
      // console.log('topOffset:', topOffset + 1);
    }
  },
  mounted() {},
  created() {
    window.addEventListener('focus', this.singlePixelScroll);
    window.addEventListener('visibilitychange', this.singlePixelScroll);
    window.addEventListener('orientationchange', this.singlePixelScroll);
  },
  destroyed() {
    window.removeEventListener('focus', this.singlePixelScroll);
    window.removeEventListener('visibilitychange', this.singlePixelScroll);
    window.addEventListener('orientationchange', this.singlePixelScroll);
  }
};

export default fixSafariOffset;

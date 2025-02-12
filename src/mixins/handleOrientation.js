const handleOrientation = {
  methods: {
    checkOrientation() {
      this.$store.commit(
        "DETECT_ORIENTATION",
        Math.abs(window.orientation) === 90
      );
    }
  },
  mounted() {
    this.checkOrientation();
    window.addEventListener(
      "orientationchange",
      () => {
        this.checkOrientation();
      },
      false
    );
  }
};

export default handleOrientation;

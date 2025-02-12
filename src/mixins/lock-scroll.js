const noScroll = require('no-scroll');
const lockScroll = {
  methods: {
    lockScroll() {
      // console.log('--- LOCK SCROLL ---');
      noScroll.on();
      this.$store.commit('UPDATE_LOCK_STATE', true);
    },
    unlockScroll() {
      // console.log('--- UNLOCK SCROLL ---');
      noScroll.off();
      this.$store.commit('UPDATE_LOCK_STATE', false);
    }
  }
};

export default lockScroll;

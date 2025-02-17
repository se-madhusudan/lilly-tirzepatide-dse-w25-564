<template src="./PopUp.html"></template>

<script>
  export default {
    name: 'PopUp',
    props: {
      popUpData: Object
    },
    data() {
    return {
      showPopUp: true,
      imageSrc: require('@/Assets/Img/VideoContent/video-thumbnail.png'),
    }
    },
    methods: {
      togglePopUp() {
        this.showPopUp = !this.showPopUp;
        // console.log('toggled the popup')
      }
    },
    mounted() {
      this.$root.$on('show-popup', this.togglePopUp);
    },
    beforeDestroy() {
      this.$root.$off('show-popup', this.togglePopUp);
    }
  }
</script>

<style src="./PopUp.scss" lang="scss" scoped></style>
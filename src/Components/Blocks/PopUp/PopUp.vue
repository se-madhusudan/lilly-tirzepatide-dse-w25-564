<template src="./PopUp.html"></template>

<script>
  export default {
    name: 'PopUp',
    props: {
      popUpData: Object
    },
    data() {
    return {
      showPopUp: false,
      videoSrc: '',
    }
    },
    methods: {
      togglePopUp() {
        this.showPopUp = !this.showPopUp;
        // console.log('toggled the popup')
      },
      videoSource(id) {
        // console.log('you clicked on: ', id);
        switch (id) {
          // case 'aliceVideo' : this.videoSrc = require('@/Assets/Img/VideoContent/video-thumbnail.png');
          // break;
          // case 'assessVideo' : this.videoSrc = require('@/Assets/Img/VideoContent/assess-thumbnail.jpg');
          // break;
          // case 'adviceVideo' : this.videoSrc = require('@/Assets/Img/VideoContent/advice-thumbnail.png');
          // break;
          // case 'acknowledgeVideo' : this.videoSrc = require('@/Assets/Img/VideoContent/acknowledge-thumbnail.png');
          case 'aliceVideo' : this.videoSrc = 'https://www.youtube.com/embed/amtBUvkweEA?si=DtNz8uKpSqX0hhwN';
          break;
          case 'assessVideo' : this.videoSrc = 'https://www.youtube.com/embed/c0KYU2j0TM4?si=3LQ4yAprEJERSf98';
          break;
          case 'adviceVideo' : this.videoSrc = 'https://www.youtube.com/embed/arj7oStGLkU?si=YKwyyjEcrABq06Q_';
          break;
          case 'acknowledgeVideo' : this.videoSrc = 'https://www.youtube.com/embed/5MgBikgcWnY?si=-1cqMxa3rVebJ7k2';
        }
      } 
    },
    mounted() {
      this.$root.$on('show-popup', this.togglePopUp);
      this.$root.$on('get-id', (id)=>{
        this.videoSource(id);
      });
    },
    beforeDestroy() {
      this.$root.$off('show-popup', this.togglePopUp);
      this.$root.$off('get-id', this.videoSource)
    }
  }
</script>

<style src="./PopUp.scss" lang="scss" scoped></style>
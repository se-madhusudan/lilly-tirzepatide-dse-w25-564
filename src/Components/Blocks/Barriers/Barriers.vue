<template src="./Barriers.html"></template>

<script>
  import Info from '@/Components/Blocks/Info/Info.vue';
  import CallOut from '@/Components/Blocks/CallOut/CallOut.vue';
  import WeightQuote from '@/Components/Blocks/WeightQuote/WeightQuote.vue';
  import VueSlickCarousel from 'vue-slick-carousel';
  import VideoContent from '@/Components/Blocks/VideoContent/VideoContent.vue';
  export default {
    name: 'Barriers',
    components: {
      Info,
      CallOut,
      WeightQuote,
      VueSlickCarousel,
      VideoContent,
    },
    props: {
      barriersData: Object,
    },

    data() {
      return {
        settings: {
          arrows: false, 
          dots: true, 
          infinite: true
        },
      }
    },

    methods: {
      showNext() {
        this.$refs.carousel.next()
      },
      showPrevious() {
        this.$refs.carousel.prev()
      }
    },
  }
</script>

<style lang="scss" src="./Barriers.scss" scoped></style>
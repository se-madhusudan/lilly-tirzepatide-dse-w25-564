<template src="./ResourceHub.html"></template>

<script>
  import Info from '@/Components/Blocks/Info/Info.vue';
  export default {
    name: "ResourceHub",
    components: {
      Info,
    },

    data() {
      return {
        infoData: {
          source: require('@/Assets/Img/icons/dse-icon_resource-hub-lg.svg'),
          title: 'Resource Hub',
          subTitle: '',
          des: []
        }
      }
    }
  }
</script>

<style src="./ResourceHub.scss" lang="scss" scoped></style>
<template src="./ResourceHub.html"></template>

<script>
  import Info from '@/Components/Blocks/Info/Info.vue';
  import References from '@/Components/Blocks/References/References.vue';
  export default {
    name: "ResourceHub",
    components: {
      Info,
      References
    },

    props: {
      data: Object
    }
  }
</script>

<style src="./ResourceHub.scss" lang="scss" scoped></style>
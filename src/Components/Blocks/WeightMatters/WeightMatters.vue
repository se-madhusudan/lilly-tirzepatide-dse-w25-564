<template src="./WeightMatters.html"></template>

<script>
  import Info from '@/Components/Blocks/Info/Info.vue';
  import CallOut from '@/Components/Blocks/CallOut/CallOut.vue';
  import Abnormal from '@/Components/Blocks/Abnormal/Abnormal.vue';
  import DiseasePercent from '@/Components/Blocks/DiseasePercent/DiseasePercent.vue';
  import VideoContent from '@/Components/Blocks/VideoContent/VideoContent.vue';
  

  export default {
    name: "WeightMatters",
    components: {
      Info,
      CallOut,
      Abnormal,
      DiseasePercent,
      VideoContent,
    },
    props: {
      mattersData: Object
    },
  }
</script>

<style src="./WeightMatters.scss" lang="scss" scoped></style>
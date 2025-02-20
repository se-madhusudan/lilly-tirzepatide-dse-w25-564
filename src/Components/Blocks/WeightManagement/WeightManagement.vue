<template src="./WeightManagement.html"></template>

<script>
  import Info from '@/Components/Blocks/Info/Info.vue';
  import RiskReduction from '@/Components/Blocks/RiskReduction/RiskReduction.vue';
  import Graphs from '@/Components/Blocks/Graphs/Graphs.vue';
  import CallOut from '@/Components/Blocks/CallOut/CallOut.vue';
  export default {
    name: "WeightManagement",
    components: {
      Info,
      RiskReduction,
      Graphs,
      CallOut,
    },
    props: {
      managementData: Object
    }
  }
</script>

<style src="./WeightManagement.scss" lang="scss" scoped></style>
<template src="./WeightManagement.html"></template>

<script>
  import Info from '@/Components/Blocks/Info/Info.vue';
  export default {
    name: "WeightManagement",
    components: {
      Info,
    },

    data() {
      return {
        infoData: {
          source: require('@/Assets/Img/icons/dse-icon-weight-mgmt-lg.svg'),
          title: 'Importance of early glycemic control and weight management in T2D',
          subTitle: 'In patients with T2D, a treatment approach that prioritizes weight management in support of glycemic control may result in more comprehensive T2D management.<sup>2,3,25</sup>',
          des: [
            'In the Look AHEAD (Action for Health in Diabetes) study, which evaluated intensive lifestyle intervention (ILI) compared to conventional diabetes support and education in adults with T2D and overweight or obesity, participants in the ILI group were more likely to lose weight and to achieve ancillary benefits of decreased medication use.<sup>16,18,28,29</sup>',
            'In patients with T2D and obesity, modest and sustained weight loss leading to clinically meaningful improvements in glycemic control, lipids, and blood pressure may reduce the need for additional medications to control these risk factors.<sup>3</sup>'
          ]
        }
      }
    }
  }
</script>

<style src="./WeightManagement.scss" lang="scss" scoped></style>
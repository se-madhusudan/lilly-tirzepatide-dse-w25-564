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

    data() {
      return {
        infoData: {
          source: require('@/Assets/Img/icons/dse-icon-weight-mgmt-lg.svg'),
          title: 'Importance of early glycemic control and weight<br /> management in T2D',
          subTitle: 'In patients with T2D, a treatment approach that prioritizes weight management in support of glycemic control may result in more comprehensive T2D management.<sup>2,3,25</sup>',
          des: [
            'In the Look AHEAD (Action for Health in Diabetes) study, which evaluated intensive lifestyle intervention (ILI) compared to conventional diabetes support and education in adults with T2D and overweight or obesity, participants in the ILI group were more likely to lose weight and to achieve ancillary benefits of decreased medication use.<sup>16,18,28,29</sup>',
            'In patients with T2D and obesity, modest and sustained weight loss leading to clinically meaningful improvements in glycemic control, lipids, and blood pressure may reduce the need for additional medications to control these risk factors.<sup>3</sup>'
          ]
        },
        riskReductionData: {
          topText: 'Early intensive glycemic control (A1C &lt;7%) has also been associated with reducing the long-term risk of complications in patients with T2D.<sup>26,27</sup>',
          icons: [
            require('@/Assets/Img/RiskReduction/lower-risk-25.png'),
            require('@/Assets/Img/RiskReduction/lower-risk-12.png'),
            require('@/Assets/Img/RiskReduction/lower-risk-10.png'),
            require('@/Assets/Img/RiskReduction/lower-risk-6.png')
          ],
          bottomText: 'Weight loss from ≥2% to ≥15% leads to significant improvements in T2D-related risk factors—including fasting glucose, blood pressure, triglycerides, and high-density lipoprotein (HDL)—and incremental increases in weight loss are associated with even greater reductions in T2D-related risk factors.<sup>28</sup>'
        },
        graphData: [
          {
            heading: 'Fasting glucose',
            image: require('@/Assets/Img/Graphs/chart-glucose.png')
          },
          {
            heading: 'Blood pressure',
            image: require('@/Assets/Img/Graphs/chart-blood-pressure.png')
          },
          {
            heading: 'Triglycerides',
            image: require('@/Assets/Img/Graphs/chart-triglycerides.png')
          },
          {
            heading: 'HDL',
            image: require('@/Assets/Img/Graphs/chart-hdl.png')
          },
        ],
        chartData: {
          text: [
            'Weight management <span class="red">early</span> in the course of diabetes care targets a key component of the pathophysiology of diabetes.<sup>2,29</sup>',
            'Early weight management is an important <span class="red">UPSTREAM</span> intervention to T2D care, while glucose control is a <span class="red">DOWNSTREAM</span> intervention.<sup>2,29</sup>'
          ],
          image: [
            require('@/Assets/Img/WeightManagement/weight-glucose-control-red-bar.png'),
            require('@/Assets/Img/WeightManagement/chart-exccessive-fat.png')
          ]
        },
        callOutContent: {
          text: 'For patients with T2D, a treatment approach that addresses excess weight upstream could provide more clinical benefit than an approach that focuses only on glycemic control.<sup>2,17</sup>',
          class: 'fullWidthWeightManagement'
        },
      }
    }
  }
</script>

<style src="./WeightManagement.scss" lang="scss" scoped></style>
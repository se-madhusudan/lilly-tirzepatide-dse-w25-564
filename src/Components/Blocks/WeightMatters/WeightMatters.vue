<template src="./WeightMatters.html"></template>

<script>
  import Info from '@/Components/Blocks/Info/Info.vue';
  import CallOut from '@/Components/Blocks/CallOut/CallOut.vue';
  import DiseasePercent from '@/Components/Blocks/DiseasePercent/DiseasePercent.vue';
  import VideoContent from '@/Components/Blocks/VideoContent/VideoContent.vue';
  

  export default {
    name: "WeightMatters",
    components: {
      Info,
      CallOut,
      DiseasePercent,
      VideoContent,
    },

    data() {
      return {
        infoData: {
          source: require('@/Assets/Img/icons/dse-icon-scale-lg.svg'),
          title: 'Why weight matters for patients with T2D',
          subTitle: 'Excess weight is a modifiable contributor to T2D pathophysiology, and managing excess weight is a key component of complete T2D care.<sup>2,3</sup>',
          des: [
            'Management of excess weight in patients with T2D can help support their efforts to achieve glycemic control, and it has the potential to change T2D outcomes and improve patients’ long-term health.<sup>1,3</sup>',
            'Based on preclinical and clinical data in animal models, excess weight—particularly in association with excess abdominal fat—is associated with local and systemic insulin resistance and inflammation.<sup>4-7</sup>'
          ]
        },
        callOutContent: 'People with T2D who have a higher body mass index (BMI) are more likely to have inadequate glycemic control.<sup>10</sup>',
        diseasePercentData: [
          {
            graph: require('@/Assets/Img/WeightMatters/graph-23-percent.png'),
            text: 'More likely to experience microvascular complications (chronic kidney disease, retinopathy, or lower-extremity disease).'
          },
          {
            graph: require('@/Assets/Img/WeightMatters/graph-56-percent.png'),
            text: 'More likely to have a history of cardiovascular disease (congestive heart failure, heart attack, or stroke).'
          }
        ],
        videoData: [
        {
          text: '<span class="bold">Watch</span> to learn more from an expert in diabetes care, who shares why a treatment approach that includes weight management could provide more clinical benefit than one that focuses exclusively on addressing hyperglycemia.',
          li: [],
          thumbnail: require('@/Assets/Img/VideoContent/video-thumbnail.png'),
          videoText: '<span class="bold">Alice Cheng, MD, FRCPC</span> <br />Associate Professor <br />University of Toronto, Canada'
        }
        ]
      }
    }
  }
</script>

<style src="./WeightMatters.scss" lang="scss" scoped></style>
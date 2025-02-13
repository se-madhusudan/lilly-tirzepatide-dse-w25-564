<template src="./Barriers.html"></template>

<script>
  import Info from '@/Components/Blocks/Info/Info.vue';
  import CallOut from '@/Components/Blocks/CallOut/CallOut.vue';
  import VueSlickCarousel from 'vue-slick-carousel';
  import VideoContent from '@/Components/Blocks/VideoContent/VideoContent.vue';
  export default {
    name: 'Barriers',
    components: {
      Info,
      CallOut,
      VueSlickCarousel,
      VideoContent,
    },

    data() {
      return {
        infoData: {
          source: require('@/Assets/Img/icons/dse-icon-barriers-lg.svg'),
          title: 'Barriers to managing weight in patients with T2D',
          subTitle: 'For many patients with T2D, achieving and maintaining meaningful weight loss is a struggle.<sup>12-18</sup>',
          des: [
            'Even in an optimal clinical trial setting—such as the Look AHEAD (Action for Health in Diabetes) study—intensive lifestyle intervention (ILI) does not result in weight loss for every participant with T2D and excess weight.<sup>17</sup>',
            'Metabolic adaptation, an adaptive hormonal and metabolic response associated with weight loss through diet and exercise, can present an additional challenge for patients with T2D and excess weight.<sup>2,19–21</sup>'
          ]
        },
        callOutContent: {
          text: 'The American Diabetes Association recommends that clinicians consider the <span class="red">effect on weight</span> when choosing medications to treat patients with T2D and overweight or obesity.<sup>1</sup>',
          class: 'fullWidthBarrier'
        },
        videoData: [
          {
            text: '<span class="bold">Watch</span> these short videos for examples of collaborative and effective conversations to help facilitate',
            li: [
              '<span class="bullets">&bullet;</span> <p><span class="bold">Assessing</span> patient readiness for diabetes management strategies</p>',
              '<span class="bullets">&bullet;</span> <p><span class="bold">Advising</span> and educating patients about addressing their glycemic and weight goals, and</p>',
              '<span class="bullets">&bullet;</span> <p><span class="bold">Acknowledging</span> the challenges in patients’ diabetes care journeys</p>'
            ],
            thumbnail: require('@/Assets/Img/VideoContent/assess-thumbnail.jpg'),
            videoText: '<span class="bold">ASSESS:</span> <br />Evaluating Patient Readiness for Diabetes-Management Strategies'
          },
          {
            text: '<span class="bold">Watch</span> these short videos for examples of collaborative and effective conversations to help facilitate',
            li: [
              '<span class="bullets">&bullet;</span> <p><span class="bold">Assessing</span> patient readiness for diabetes management strategies</p>',
              '<span class="bullets">&bullet;</span> <p><span class="bold">Advising</span> and educating patients about addressing their glycemic and weight goals, and</p>',
              '<span class="bullets">&bullet;</span> <p><span class="bold">Acknowledging</span> the challenges in patients’ diabetes care journeys</p>'
            ],
            thumbnail: require('@/Assets/Img/VideoContent/advice-thumbnail.png'),
            videoText: '<span class="bold">ADVISE:</span> <br />Educating Patients About Addressing Glycemic and Weight Goals'
          },
          {
            text: '<span class="bold">Watch</span> these short videos for examples of collaborative and effective conversations to help facilitate',
            li: [
              '<span class="bullets">&bullet;</span> <p><span class="bold">Assessing</span> patient readiness for diabetes management strategies</p>',
              '<span class="bullets">&bullet;</span> <p><span class="bold">Advising</span> and educating patients about addressing their glycemic and weight goals, and</p>',
              '<span class="bullets">&bullet;</span> <p><span class="bold">Acknowledging</span> the challenges in patients’ diabetes care journeys</p>'
            ],
            thumbnail: require('@/Assets/Img/VideoContent/acknowledge-thumbnail.png'),
            videoText: '<span class="bold">ACKNOWLEDGE:</span> <br />Assisting Patients Through Challenges in Their Diabetes Care Journeys'
          }
        ]
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
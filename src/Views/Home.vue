<template src="./Home.html"></template>
<script>
import { mapState } from "vuex";
import ScrollDepthAnalytics from "@/mixins/ScrollDepthAnalytics";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroSection from "@/Components/Blocks/HeroSection/HeroSection";
import WeightMatters from "@/Components/Blocks/WeightMatters/WeightMatters.vue";
import Barriers from "@/Components/Blocks/Barriers/Barriers.vue";
import ResourceHub from "@/Components/Blocks/ResourceHub/ResourceHub.vue";
import WeightManagement from "@/Components/Blocks/WeightManagement/WeightManagement.vue";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
export default {
  name: "HomePage",
  components: {
    HeroSection,
    WeightMatters,
    Barriers,
    WeightManagement,
    ResourceHub,
  },
  data() {
    return {
      heroData: {
        title: 'Glycemic Control and Excess Weight in Type 2 Diabetes: Expert Perspectives',
        des: 'Learn how addressing excess weight can support efforts to achieve glycemic control in patients with type 2 diabetes.<sup>1</sup>',
      },
      mattersData: {
        infoData: {
          source: require('@/Assets/Img/icons/dse-icon-scale-lg.svg'),
          title: 'Why weight matters for patients with T2D',
          subTitle: 'Excess weight is a modifiable contributor to T2D pathophysiology, and managing excess weight is a key component of complete T2D care.<sup>2,3</sup>',
          des: [
            'Management of excess weight in patients with T2D can help support their efforts to achieve glycemic control, and it has the potential to change T2D outcomes and improve patients’ long-term health.<sup>1,3</sup>',
            'Based on preclinical and clinical data in animal models, excess weight—particularly in association with excess abdominal fat—is associated with local and systemic insulin resistance and inflammation.<sup>4-7</sup>'
          ]
        },
        callOutContent: {
          text: 'People with T2D who have a higher body mass index (BMI) are more likely to have inadequate glycemic control.<sup>10</sup>',
        },
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
          id: 'aliceVideo',
          thumbnail: require('@/Assets/Img/VideoContent/video-thumbnail.png'),
          videoText: '<span class="bold">Alice Cheng, MD, FRCPC</span> <br />Associate Professor <br />University of Toronto, Canada'
        }
        ]
      },
      barriersData: {
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
        quoteData: [
          {
            image: require('@/Assets/Img/WeightQuote/weight-icon.svg'),
            text: 'As little as <span class="semi-bold">3%</span> weight loss is associated with metabolic adaptation, which results in a tendency toward weight regain.<sup>19,20,22,23</sup>'
          },
          {
            image: require('@/Assets/Img/WeightQuote/rx-icon.svg'),
            text: 'Studies have also shown that some antihyperglycemic agents may be associated with weight gain.<sup>14,24</sup>'
          }
        ],
        videoData: [
          {
            text: '<span class="bold">Watch</span> these short videos for examples of collaborative and effective conversations to help facilitate',
            li: [
              '<span class="bullets">&bullet;</span> <p><span class="bold">Assessing</span> patient readiness for diabetes management strategies</p>',
              '<span class="bullets">&bullet;</span> <p><span class="bold">Advising</span> and educating patients about addressing their glycemic and weight goals, and</p>',
              '<span class="bullets">&bullet;</span> <p><span class="bold">Acknowledging</span> the challenges in patients’ diabetes care journeys</p>'
            ],
            id: 'assessVideo',
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
            id: 'adviceVideo',
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
            id: 'acknowledgeVideo',
            thumbnail: require('@/Assets/Img/VideoContent/acknowledge-thumbnail.png'),
            videoText: '<span class="bold">ACKNOWLEDGE:</span> <br />Assisting Patients Through Challenges in Their Diabetes Care Journeys'
          }
        ]
      },
      managementData: {
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
      },
      resourcesData: {
        infoData: {
          source: require('@/Assets/Img/icons/dse-icon_resource-hub-lg.svg'),
          title: 'Resource Hub',
          subTitle: '',
          des: []
        },
        resourceData: {
          title: 'Medical Workmat',
          des: 'Talking to patients with T2D about weight management can be challenging. The Medical Workmat can help navigate those conversations.',
          anchorText: 'Download the Medical Workmat',
          url: 'https://morethana1c.lilly.com/assets/pdf/weight_management_workmat.pdf',
          image: require('@/Assets/Img/ResourceSection/medical-workmat.png')
        },
        referenceData: {
          title: 'References',
          li: [
            'Davies MJ, Aroda VR, Collins BS, et al. Management of hyperglycemia in type 2 diabetes, 2022. A consensus report by the American Diabetes Association (ADA). <i>Diabetes Care.</i> 2022;45(11):2753-2786.',
            'Lingvay I, Sumithran P, Cohen R, le Roux C. Obesity management as a primary treatment goal for type 2 diabetes: time to reframe the conversation. <i>Lancet.</i> 2022;399(10322):394-405.',
            'American Diabetes Association Professional Practice Committee. 8. Obesity and weight management for the prevention and treatment of type 2 diabetes: standards of medical care in diabetes-2024. <i>Diabetes Care.</i> 2024;47(suppl 1):S145-S157.',
            'Trouwborst I, Bowser SM, Goossens GH, Blaak EE. Ectopic fat accumulation in distinct insulin resistant phenotypes; targets for personalized nutritional interventions. <i>Front Nutr.</i> 2018;5:77.',
            'Chait A, den Hartigh LJ. Adipose tissue distribution, inflammation and its metabolic consequences, including diabetes and cardiovascular disease. <i>Front Cardiovasc Med.</i> 2020;7:22.',
            'de Luca C, Olefsky JM. Inflammation and insulin resistance. <i>FEBS Lett. </i>2008;582(1):97-105.',
            'Xu H, Barnes GT, Yang Q, et al. Chronic inflammation in fat plays a crucial role in the development of obesity-related insulin resistance. <i>J Clin Invest. </i>2003;112(12):1821-1830.',
            'Kozawa J, Shimomura I. Ectopic fat accumulation in pancreas and heart. <i>J Clin Med.</i> 2021;10(6):1326.',
            'Ye R, Onodera T, Scherer PE. Lipotoxicity and β cell maintenance in obesity and type 2 diabetes. <i>J Endocr Soc.</i> 2019;3(3):617-631.',
            'Boye KS, Lage MJ, Shinde S, et al. Trends in HbA1c and body mass index among individuals with type 2 diabetes: evidence from a US database 2012-2019. <i>Diabetes Ther.</i> 2021;12(7):2077-2087.',
            'Fang M, Selvin E. Thirty-year trends in complications in U.S. adults with newly diagnosed type 2 diabetes. <i>Diabetes Care.</i> 2021;44(3):699-706.',
            'Franz MJ. Weight management: obesity to diabetes. <i>Diabetes Spectr.</i> 2017;30(3):149-153.',
            'Powers MA, Bardsley J, Cypress M, et al. Diabetes self-management education and support in type 2 diabetes: a joint position statement of the American Diabetes Association, the American Association of Diabetes Educators, and the Academy of Nutrition and Dietetics. <i>Diabetes Care.</i> 2015;38(7):1372-1382.',
            'Van Gaal L, Scheen A. Weight management in type 2 diabetes: current and emerging approaches to treatment. <i>Diabetes Care.</i> 2015;38(6):1161-1172.',
            'Puhl RM, Himmelstein MS, Hateley-Browne JL, Speight J. Weight stigma and diabetes stigma in U.S. adults with type 2 diabetes: associations with diabetes self-care behaviors and perceptions of health care. <i>Diabetes Res Clin Pract.</i> 2020;168:108387.',
            'Look AHEAD Research Group. Cardiovascular effects of intensive lifestyle intervention in type 2 diabetes [published correction appears in <i>N Engl J Med.</i> 2014;370(19):1866]. <i>N Engl J Med.</i> 2013;369(2):145-154.',
            'Look AHEAD Research Group. Eight-year weight losses with an intensive lifestyle intervention: the Look AHEAD study. <i>Obesity (Silver Spring).</i> 2014;22(1):5-13.',
            'Redmon JB, Bertoni AG, Connelly S, et al. Effect of the Look AHEAD study intervention on medication use and related cost to treat cardiovascular disease risk factors in individuals with type 2 diabetes. <i>Diabetes Care.</i> 2010;33(6):1153-1158.',
            'Melby C, Paris H, Foright R, Peth J. Attenuating the biologic drive for weight regain following weight loss: must what goes down always go back up? <i>Nutrients.</i> 2017;9(5):468.',
            'Sumithran P, Prendergast L, Delbridge E, et al. Long-term persistence of hormonal adaptations to weight loss. <i>N Engl J Med.</i> 2011:365(17):1597-1604.',
            'Thom G, McIntosh A, Messow CM, et al. Weight loss-induced increase in fasting ghrelin concentration is a predictor of weight regain: evidence from the Diabetes Remission Clinical Trial (DiRECT). <i>Diabetes Obes Metab.</i> 2021;23(3):711-719.',
            'Nunes CL, Jesus F, Francisco R, et al. Adaptive thermogenesis after moderate weight loss: magnitude and methodological issues. <i>Eur J Nutr.</i> 2021;61(3):1405-1416.',
            'Lien LF, Haqq AM, Arlotto M, et al. The STEDMAN project: biophysical, biochemical and metabolic effects of a behavioral weight loss intervention during weight loss, maintenance, and regain. <i>OMICS.</i> 2009;13(1):21-35.',
            'Apovian C, Okemah J, O’Neil P. Body weight considerations in the management of type 2 diabetes. <i>Adv Ther.</i> 2019:36:44-58.',
            'Look AHEAD Research Group. Effect of a long-term behavioural weight loss intervention on nephropathy in overweight or obese adults with type 2 diabetes: a secondary analysis of the Look AHEAD randomised clinical trial. <i>Lancet Diabetes Endocrinol.</i> 2014;2(10):801-809.',
            'UK Prospective Diabetes Study (UKPDS) Group. Intensive blood-glucose control with sulphonylureas or insulin compared with conventional treatment and risk of complications in patients with type 2 diabetes (UKPDS 33). <i>Lancet.</i> 1998;352:837-853.',
            'Holman RR, Paul SK, Bethel MA, et al. 10-year follow-up of intensive glucose control in type 2 diabetes. <i>N Engl J Med.</i> 2008;359(15):1577-1589.',
            'Wing RR, Lang W, Wadden TA, et al. Benefits of modest weight loss in improving cardiovascular risk factors in overweight and obese individuals with type 2 diabetes. <i>Diabetes Care.</i> 2011;34(7):1481-1486.',
            'Lean MEJ, Leslie WS, Barnes AC, ett al. Durability of a primary care-led weight-management intervention for remission of type 2 diabetes: 2-year results of the DiRECT open-label, cluster-randomised trial. <i>Lancet Diabetes Endocrinol.</i> 2019;7(5);344-355.',
          ]
        }
      },

      isActiveOverlay: false,
      deadInteractivity: true,
      currentSection: 0,
      sections: {},
      sectionScene: [],
      options: {
        container: "body",
        easing: "ease-in",
        offset: 0,
      },
      publicPath: process.env.BASE_URL,
      microbeAnimationScene_1: {},
      popupTimer: null,
      backplateTimer: null,
      resizeTimer: null,
      initTileProps: [],
      postFontSize: 1,
    };
  },

  computed: {
    ...mapState([
      "userAgent",
      "urls",
      "animationsData",
      "controllerExist",
      "mainMenu",
      "activeSection",
    ]),
    isIE() {
      return this.userAgent.browser.name === "ie";
    },
    routes() {
      return this.$router.options.routes;
    },
  },

  methods: {
  },

  mounted() { },

  mixins: [ScrollDepthAnalytics],
};
</script>

<style lang="scss" src="./Home.scss" scoped></style>
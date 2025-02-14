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

    data() {
      return {
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
          icons: [
            require('@/Assets/Img/icons/icon-hide.svg'),
            require('@/Assets/Img/icons/icon-show.svg')
          ],
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
      }
    }
  }
</script>

<style src="./ResourceHub.scss" lang="scss" scoped></style>
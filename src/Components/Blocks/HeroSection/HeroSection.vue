<template src="./HeroSection.html"></template>

<script>
  export default {
    name: 'HeroSection',
    props: {
        heroData: Object,
    },
    methods: {
      scrollToSection(Matters) {
        const element = document.getElementById(Matters);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
          if (window.innerWidth > 768) {
              window.scrollTo({
              top: elementTop - 100,
              behavior: 'smooth',
            });
          }
          else{
            window.scrollTo({
              top: elementTop - 75,
              behavior: 'smooth',
            });
          }
        }
      }
  }

  }
</script>

<style lang="scss" src="./HeroSection.scss" scoped></style>
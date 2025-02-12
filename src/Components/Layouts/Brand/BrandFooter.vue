<template>
  <section class="brandFooter" id="brandFooter">
    <div class="contentWrap">
    </div>
    <div class="brandFooter__upper">
      <div class="contentWrap">
        <div class="brandFooter__upperContent">
          <div class="upperLeft">
            <img src="../../../Assets/Img/logos/lilly-logo.svg" alt="Lilly logo" />
          </div>
          <div class="upperRight">
            <p>&copy; Lilly USA, LLC 2024. All rights reserved.</p>
            <p>PP-TR-US-2124  10/2024</p>
          </div>
        </div>
      </div>
      <div class="contentWrap">
        <div class="brandFooter__disclaimer">
          <p>This <i>Endocrinology Advisor Expert Perspectives</i> is produced as a basic reminder of important information for healthcare professionals. Readers are advised to consult manufacturers and specialists if questions arise about specific products, treatments, or diseases. The publisher and editors do not assume liability for any errors or omissions. <i>Endocrinology Advisor</i> and <i>Expert Perspectives</i> are registered trademarks of Haymarket Media, Inc.</p>
        </div>
      </div>
    </div>
    <div class="brandFooter__lower">
      <div class="brandFooter__lowerContent">
        <p>&copy; 2024 Haymarket Media, Inc. <span class="text-noWrap">All rights reserved.</span></p>
        <p class="bottomLinks">
          <a :href="urls.PP.link" target="_blank">{{ urls.PP.text }}</a> 
          <a :href="urls.TC.link" target="_blank">{{urls.TC.text }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>

import {
  mapState
} from "vuex";
export default {
  name: "BrandFooter",
  components: {

  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(["urls"]),
  },
};
</script>

<style lang="scss" src="./BrandFooter.scss" />

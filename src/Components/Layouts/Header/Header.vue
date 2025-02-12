<template>
  <div class="headerMenuWrap">
    <!--div class="mobileSectionHighlight">
      <ul>
        <li v-for="link of mainMenu" :class="['header-link', 'header-link--' + link.id, { active: activeSection == link.id },]" v-html="link.title"></li>
      </ul>
    </div-->
    <div class="headerWrap">
      <div class="headerWrap__left">
        This site is for US healthcare professionals only.
      </div>
      <div class="headerWrap__right">
        <div class="menu" v-click-outside="collapseMenu">
          <nav>
            <ul class="header">
              <li v-for="link of mainMenu">
                <a :class="['header-link', 'header-link--' + link.id, { active: activeSection === link.id },]" @click="scrollToAnchor(link.anchorRef, link.id), sectionClickDataLayer(link.dataLayerSectionName, 'section-click', '-')" v-html="link.title"></a>
              </li>
            </ul>
          </nav>
          <button class="header__menuToggle" :class="{ active_menu: this.mobileMenuState }" @click="toggleMenu">
            <span class="sr-only" v-if="!this.mobileMenuState">Menu</span>
            <span class="sr-only" v-if="this.mobileMenuState">Close</span>
          </button>
          <div class="header__collapseWrapper" :class="{'header__collapseWrapper  header__collapseWrapper--open':this.mobileMenuState,}">
            <div class="menu-overlay" @click="toggleMenu"></div>
            <ul class="header__dropdown">
              <li v-for="link of mainMenu" :class="['header-link','header-link--' + link.id,{ active: activeSection === link.id },]" @click="scrollToAnchor(link.anchorRef, link.id), sectionClickDataLayer(link.dataLayerSectionName, 'section-click', '-')">
                <a v-html="link.title"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from "vuex";
import ClickOutside from 'vue-click-outside';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClickAnalytics from "@/mixins/ClickAnalytics";
export default {
  name: "Header",
  components: {},
  data() {
    return {
      isOpen: false,
      isScrolled: false,
      onMenuClick: false,
      showBackToTop: false,
      windowWidth: window.innerWidth,
    };
  },
  mixins: [ClickAnalytics],
  computed: {
    ...mapState([
      "userAgent",
      "urls",
      "mobileMenuState",
      "activeSection",
      "mainMenu",
    ]),
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit("TOGGLE_MOBILE_MENU", !this.mobileMenuState);
    },

    scrollToAnchor(anchor, linkid) {
      this.onMenuClick = true;
      this.$store.commit("SET_ACTIVE_SECTION", linkid);
      if (window.innerWidth > 1024) {
        this.$scrollTo(anchor, { offset: - 120 });
      } else {
        this.$scrollTo(anchor, { offset: - 75 });
      }
    },

    detectScrollYPosition() {
      this.isScrolled = window.pageYOffset > 0;
      if (this.mobileMenuState == true) {
        this.$store.commit("TOGGLE_MOBILE_MENU", !this.mobileMenuState);
      }
    },

    collapseMenu() {
      if (this.mobileMenuState == true) {
        this.$store.commit("TOGGLE_MOBILE_MENU", !this.mobileMenuState);
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
      if (this.mobileMenuState == true) {
        this.$store.commit("TOGGLE_MOBILE_MENU", !this.mobileMenuState);
      }
    },

    scrollToTop() {
      this.onMenuClick = true;
      document.querySelector(".mobileSectionHighlight").classList.remove('active');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    handleScrollEnd() {
      this.onMenuClick = false;
    },

    handleScroll() {
      this.showBackToTop = window.scrollY > 100;
      this.onMenuClick == false;
    },
  },
  watch: {
    mobileMenuState() {
      const $body = document.querySelector("body");
      if (this.mobileMenuState) {
        $body.classList.add("popup-open");
      } else {
        $body.classList.remove("popup-open");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.detectScrollYPosition);
    document
      .querySelector(".header__collapseWrapper ul li")
      .addEventListener("click", function () {
        document.querySelector(".header__menuToggle").click();
      });
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scrollend", this.handleScrollEnd);
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    };
    if (window.innerWidth < 767) {
      this.$store.commit("SET_ACTIVE_SECTION", 0);
    }

    var sectionviewarray = [".heroSection","#Matters","#Barriers", "#Importance", "#Resource", ".references "];
    for (let i = 0; i < sectionviewarray.length; i++) {
      ScrollTrigger.create({
        trigger: sectionviewarray[i],
        start: "top 20%",
        end: "top 20%",
        toggleActions: "restart pause reverse pause",
        onEnterBack: () => {
           var currentsection = i - 1;
           this.$store.commit("SET_ACTIVE_SECTION", currentsection);
          if (currentsection == 1 || currentsection == 2 || currentsection == 3) {
            //document.querySelector(".mobileSectionHighlight").classList.add('active');
          }
          else {
           // document.querySelector(".mobileSectionHighlight").classList.remove('active');
          } 
        },
        onEnter: () => {
          this.$store.commit("SET_ACTIVE_SECTION", i);
          if (i == 1 || i == 2 || i == 3) {
            //document.querySelector(".mobileSectionHighlight").classList.add('active');
          }
          else {
            //document.querySelector(".mobileSectionHighlight").classList.remove('active');
          }
        },
      });
    } 
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  directives: {
    ClickOutside
  },
};
</script>

<style lang="scss" src="./Header.scss" scoped></style>
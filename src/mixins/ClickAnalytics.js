const ClickAnalytics = {
  data() {
    return {
      triggers: [],
    };
  },
  methods: {
    sectionNameDataLayer(section, eventname, subsection) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: eventname,
          "section": section,
          "subsection": subsection,
        });
      }
    },
    sectionClickDataLayer(section, eventname, subsection) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: eventname,
          "section": section,
          "subsection": subsection,
        });
      }
    },
    buttonDataLayer(pagename, eventname, buttonname) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: eventname,
          "page-name": pagename,
          "button-name": buttonname,
        });
      }
    },
  },
  destroyed() {
    this.triggers.forEach((item) => {
      item.kill();
    });
    this.triggers = [];
  },
};

export default ClickAnalytics;

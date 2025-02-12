import {ScrollTrigger} from "gsap/ScrollTrigger";

const ScrollDepthAnalytics = {
    data() {
        return {
            triggers: [],
        };
    },
    methods: {
        initScrollDepthAnalytics() {
            const pageHeight = document.body.scrollHeight;
            const pagePartHeight = pageHeight / 10;

            for (let i = 1; i <= 10; i++) {
                this.triggers.push(
                    ScrollTrigger.create({
                        trigger: "body",
                        start: pagePartHeight * i - window.screen.height - 300,
                        once: true,
                        onEnter: () => {
                            if (window.dataLayer) {
                                window.dataLayer.push({
                                    event: "scroll-depth",
                                    "page-name": `landing`,
                                    "scroll-depth": `${i * 10}%`,
                                });
                            }
                        },
                    })
                );
            }
        },
    },
    mounted() {
        this.initScrollDepthAnalytics();
    },
    destroyed() {
        this.triggers.forEach((item) => {
            item.kill();
        });
        this.triggers = [];
    },
};

export default ScrollDepthAnalytics;

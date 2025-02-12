const puppeteer = require("puppeteer");
const ora = require("ora");
const mkdirp = require("mkdirp");
const {
  rmDir,
  minTwoDigits
} = require("./helper");
const spinner = new ora();
const FOLDER_OUTPUT = "./tools/screenshots/output/";
const FOLDER_NAME = "mobile";
const SCREEN_PATH = `./tools/screenshots/output/${FOLDER_NAME}/`;
const SERVER_PATH = "http://localhost:8080/";
const INNER_PAGES = [];
const VIEWPORT_WIDTH = 400;
const VIEWPORT_HEIGHT = 720;
const VIEWPORT_OPTS = {
  width: VIEWPORT_WIDTH,
  height: VIEWPORT_HEIGHT,
  deviceScaleFactor: 2,
  hasTouch: true,
};
let viewportOpts = VIEWPORT_OPTS;

rmDir(FOLDER_OUTPUT + FOLDER_NAME); // clean folder with screens

mkdirp(FOLDER_OUTPUT);
mkdirp(FOLDER_OUTPUT + FOLDER_NAME);

(async () => {
  // const browser = await puppeteer.launch({ devtools: false });
  const browser = await puppeteer.launch({
    devtools: false,
    headless: true,
    args: ["--no-sandbox"],
    ignoreHTPPSErrors: true,
  });
  const page = await browser.newPage();

  /** Run spinner and execute recived Function */
  async function makeScreen(msg, func) {
    spinner.start(`Start - ${msg}`);
    await func();
    spinner.succeed(`Finish - ${msg}`);
  }

  async function screenshot(name, clip) {
    let opts = {
      path: SCREEN_PATH + name + ".png"
    };

    if (clip) {
      opts.clip = clip;
    }

    await page.screenshot(opts);
  }

  /**
   * Reset viewport height
   */
  async function resetVH() {
    viewportOpts.height = VIEWPORT_HEIGHT;
    await page.setViewport(viewportOpts);
  }

  /**
   * Screenshot DOM element
   */
  async function screenshotDOMElement(
    selector,
    name = "00_00_00",
    padding = 0
  ) {
    const rect = await page.evaluate((selector) => {
      const element = document.querySelector(selector);
      const {
        x,
        y,
        width,
        height
      } = element.getBoundingClientRect();
      return {
        left: x,
        top: y,
        width,
        height,
        id: element.id
      };
    }, selector);

    return await page.screenshot({
      path: `${SCREEN_PATH}${name}.png`,
      clip: {
        x: rect.left - padding,
        y: rect.top - padding,
        width: rect.width + padding * 2,
        height: rect.height + padding * 2,
      },
    });
  }

  /** Set base viewport */
  await page.setViewport(viewportOpts);
  await page.goto(`${SERVER_PATH}?screentest=true`, {
    waitUntil: "networkidle2",
  });
  await page.waitFor(3000 * 4);
  await makeScreen("Home Page", screenHomePage);
  await makeScreen("Home Weight Management section", WeightManagement);
  await makeScreen("Home Weight Management video", WeightManagementVideo);
  await makeScreen("Home Barriers section", Barriers);
  await makeScreen("Home Barriers Video Popup section", BarriersVideoPopup);
  await makeScreen("Home Importance section", Importance);
  await makeScreen("Home Resource section", Resource);
  await makeScreen("Home Reference section", Reference);

  /**
   * Screen Home Page
   */
  async function screenHomePage() {
    await page.waitFor(1500);
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitFor(1500);
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await page.waitFor(1500);
    const containerHeight_1 = await page.evaluate(() => {
      return 850
    });
    viewportOpts.height = containerHeight_1;
    await page.setViewport(viewportOpts);
    await page.waitFor(1500);
    await screenshot("00_00_homePage");
    await resetVH();
    await page.waitFor(1500);
    const containerHeight_2 = await page.evaluate(() => {
      document.getElementsByClassName("header__menuToggle")[0].click();
      return 850
    });
    viewportOpts.height = containerHeight_2;
    await page.setViewport(viewportOpts);
    await page.waitFor(1500);
    await screenshot("00_01_homePage");
    await resetVH();
  }

  async function WeightManagement() {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitFor(1500);
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    const containerHeight_1 = await page.evaluate(() => {
      document.querySelector(".home").style.display = "block";
      document.querySelector(".heroSection").style.display = "none";
      document.querySelector(".mattersSection").style.display = "block";
      document.querySelector(".barriersSection").style.display = "none";
      document.querySelector(".importanceSection").style.display = "none";
      document.querySelector(".resourceSection").style.display = "none";
      document.querySelector(".brandFooter").style.display = "none";
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight + 20;
    });

    viewportOpts.height = containerHeight_1;
    await page.setViewport(viewportOpts);
    await page.waitFor(1500);
    await screenshot("01_00_homeWeightManagement");
  }

  async function WeightManagementVideo() {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitFor(1500);
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    const containerHeight_1 = await page.evaluate(() => {
      document.querySelector(".mattersSection").style.display = "block";
      document.getElementsByClassName("videopopup")[0].classList.add("opened");
      document.getElementsByClassName("videoPlacehoder")[0].style.display = "block";
      document.getElementsByClassName("brightcove-video-holder")[0].style.display = "none";      
      document.querySelector(".intro").style.display = "none";
      document.querySelector(".abnormalExcessSection").style.display = "none";
      document.getElementsByClassName("CalloutSection")[0].style.display = "none";
      document.querySelector(".PercentageSection").style.display = "none";
      document.querySelector(".barriersSection").style.display = "block";
      document.querySelector(".barriersSubsection").style.display = "none";
      document.querySelector(".support").style.display = "none";
      document.getElementsByClassName("CalloutSection")[1].style.display = "none";
      document.getElementsByClassName("videosSection")[1].style.display = "none";
      document.querySelector(".importanceSection").style.display = "none";
      document.querySelector(".resourceSection").style.display = "none";
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight + 20;
    });

    viewportOpts.height = containerHeight_1;
    await page.setViewport(viewportOpts);
    await page.waitFor(1500);
    await screenshot("01_00_homeWeightManagementVideo");
  }

  async function Barriers() {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitFor(1500);
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    const containerHeight_1 = await page.evaluate(() => {
      document.querySelector(".mattersSection").style.display = "none";
      document.querySelector(".barriersSection").style.display = "block";
      document.querySelector(".barriersSubsection").style.display = "block";
      document.querySelector(".support").style.display = "block";
      document.getElementsByClassName("CalloutSection")[1].style.display = "block";
      document.getElementsByClassName("videosSection")[1].style.display = "block";
      document.querySelector(".barriersSection").style.marginTop = "-50px";
      document.querySelector(".importanceSection").style.display = "none";
      document.querySelector(".resourceSection").style.display = "none";
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight - 620;
    });

    viewportOpts.height = containerHeight_1;
    await page.setViewport(viewportOpts);
    await page.waitFor(1500);
    await screenshot("02_00_homeBarriers_Page_01");

    await page.waitFor(1500);
    const containerHeight_2 = await page.evaluate(() => {
      document.getElementById("Barriers").getElementsByClassName("introBarriers")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("contentWrap")[1].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("CalloutSection")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("support")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("videosSection")[0].style.paddingTop = "40px"; 
      document.getElementsByClassName("slick-dots")[0].getElementsByTagName("li")[1].getElementsByTagName("button")[0].click();
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight + 30;
    });
    viewportOpts.height = containerHeight_2;
    await page.setViewport(viewportOpts);
    await page.waitFor(1000);
    await screenshot("02_00_homeBarriers_Page_02");

    await page.waitFor(1500);
    const containerHeight_3 = await page.evaluate(() => {
      document.getElementById("Barriers").getElementsByClassName("introBarriers")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("contentWrap")[1].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("CalloutSection")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("support")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("videosSection")[0].style.paddingTop = "40px"; 
      document.getElementsByClassName("slick-dots")[0].getElementsByTagName("li")[2].getElementsByTagName("button")[0].click();
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight + 30;
    });
    viewportOpts.height = containerHeight_3;
    await page.setViewport(viewportOpts);
    await page.waitFor(1000);
    await screenshot("02_00_homeBarriers_Page_03");

    await resetVH();
  }

  async function BarriersVideoPopup() {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitFor(1500);
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
      const containerHeight_1 = await page.evaluate(() => {
      document.querySelector(".introBarriers").style.display = "none";
      document.querySelector(".barriersSubsection").style.display = "none";
      document.getElementsByClassName("videopopup")[1].classList.add("opened");
      document.getElementsByClassName("brightcove-video-holder")[1].style.display = "none"; 
      document.getElementsByClassName("videoPlacehoder")[1].style.display = "block";
      document.getElementsByClassName("slick-dots")[0].getElementsByTagName("li")[0].getElementsByTagName("button")[0].click();
      document.getElementById("Barriers").getElementsByClassName("introBarriers")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("contentWrap")[1].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("CalloutSection")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("support")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("videosSection")[0].style.paddingTop = "40px"; 
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight + 30;
    });

    viewportOpts.height = containerHeight_1;
    await page.setViewport(viewportOpts);
    await page.waitFor(1500);
    await screenshot("02_00_homeBarriers_Page_01_1");

    await page.waitFor(1500);
      const containerHeight_2 = await page.evaluate(() => {
      document.getElementsByClassName("videopopup")[1].classList.remove("opened");
      document.getElementsByClassName("videopopup")[2].classList.add("opened");
      document.getElementsByClassName("brightcove-video-holder")[2].style.display = "none"; 
      document.getElementsByClassName("videoPlacehoder")[1].style.display = "none";
      document.getElementsByClassName("videoPlacehoder")[2].style.display = "block";
      document.getElementsByClassName("videoPlacehoder")[3].style.display = "none";
      document.getElementsByClassName("slick-dots")[0].getElementsByTagName("li")[1].getElementsByTagName("button")[0].click();
      document.getElementById("Barriers").getElementsByClassName("introBarriers")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("contentWrap")[1].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("CalloutSection")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("support")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("videosSection")[0].style.paddingTop = "40px"; 
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight + 30;
    });
    viewportOpts.height = containerHeight_2;
    await page.setViewport(viewportOpts);
    await page.waitFor(1000);
    await screenshot("02_00_homeBarriers_Page_02_1");

    await page.waitFor(1500);
      const containerHeight_3 = await page.evaluate(() => {
      document.getElementsByClassName("videopopup")[1].classList.remove("opened");
      document.getElementsByClassName("videopopup")[2].classList.remove("opened");
      document.getElementsByClassName("videopopup")[3].classList.add("opened");
      document.getElementsByClassName("brightcove-video-holder")[3].style.display = "none"; 
      document.getElementsByClassName("videoPlacehoder")[1].style.display = "none";
      document.getElementsByClassName("videoPlacehoder")[2].style.display = "none";
      document.getElementsByClassName("videoPlacehoder")[3].style.display = "block";
      document.getElementsByClassName("slick-dots")[0].getElementsByTagName("li")[2].getElementsByTagName("button")[0].click();
      document.getElementById("Barriers").getElementsByClassName("introBarriers")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("contentWrap")[1].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("CalloutSection")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("support")[0].style.display = "none"; 
      document.getElementById("Barriers").getElementsByClassName("videosSection")[0].style.paddingTop = "40px"; 
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight + 30;
    });
    viewportOpts.height = containerHeight_3;
    await page.setViewport(viewportOpts);
    await page.waitFor(1000);
    await screenshot("02_00_homeBarriers_Page_03_1");
  }

  async function Importance() {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitFor(1500);
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    const containerHeight_1 = await page.evaluate(() => {
      document.querySelector(".mattersSection").style.display = "none";
      document.querySelector(".barriersSection").style.display = "none";
      document.querySelector(".importanceSection").style.display = "block";
      document.querySelector(".importanceSection").style.marginTop = "-50px";
      document.querySelector(".resourceSection").style.display = "none";
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight + 30;
    });

    viewportOpts.height = containerHeight_1;
    await page.setViewport(viewportOpts);
    await page.waitFor(1500);
    await screenshot("03_00_homeImportance");
  }

  async function Resource() {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitFor(1500);
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    const containerHeight_1 = await page.evaluate(() => {
      document.querySelector(".mattersSection").style.display = "none";
      document.querySelector(".barriersSection").style.display = "none";
      document.querySelector(".importanceSection").style.display = "none";
      document.querySelector(".resourceSection").style.display = "block";
      document.querySelector(".resourceSection").style.marginTop = "-50px";
      document.getElementsByTagName("footer")[0].style.display = "block";
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight;
    });

    viewportOpts.height = containerHeight_1;
    await page.setViewport(viewportOpts);
    await page.waitFor(1500);
    await screenshot("04_00_homeResource");
  }

  async function Reference() {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitFor(1500);
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    const containerHeight_1 = await page.evaluate(() => {
      document.querySelector(".mattersSection").style.display = "none";
      document.querySelector(".barriersSection").style.display = "none";
      document.querySelector(".importanceSection").style.display = "none";
      document.querySelector(".resourceSection").style.display = "none";
      document.querySelector(".brandFooter").style.display = "block";
      document.querySelector(".references").style.display = "block";
      document.querySelector(".references").classList.add('show');
      document.querySelector(".references ol").style.display = "block";
      document.querySelector(".brandFooter__upper").style.display = "block";
      document.getElementsByTagName("footer")[0].style.display = "block";
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight;
    });

    viewportOpts.height = containerHeight_1;
    await page.setViewport(viewportOpts);
    await page.waitFor(1500);
    await screenshot("05_00_homeReference_00_Page_01");

    await page.waitFor(1500);
    const containerHeight_3 = await page.evaluate(() => {
      document.querySelector(".references").classList.remove('show');
      document.querySelector(".references ol").style.display = "none";
      return document.getElementsByClassName("main-wrapp")[0].scrollHeight;
    });
    viewportOpts.height = containerHeight_3;
    await page.setViewport(viewportOpts);
    await page.waitFor(1000);
    await screenshot("05_00_homeReference_00_Page_02");
  }
  await browser.close();
})();
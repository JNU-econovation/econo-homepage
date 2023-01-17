import { moveBottomTop, moveRightLeft } from "./animation.mjs";
import { Application } from "./runtime.mjs";
import { $ } from "./utils.mjs";

const canvas = $("#canvas3d");
const title1 = $(".title-text div:nth-child(1) > div");
const title2 = $(".title-text div:nth-child(2) > div");
const title3 = $(".title-text div:nth-child(3) > div");
const titleDate1 = $(".title-date div:nth-child(1)");
const titleDate2 = $(".title-date div:nth-child(2)");
const subtitle1 = $(".subtitle-text div:nth-child(1)");
const subtitle2 = $(".subtitle-text div:nth-child(2)");
const titleImg = $(".title-powerby-img");
const loading = $("#loading");

const app = new Application(canvas);
app
  .load("https://prod.spline.design/EtRYZXWgimdP3Mn4/scene.splinecode")
  .then(() => {
    canvas.style.transform = "translate(15%, -1%) scale(1.3)";
    scrollTo({top: 0, left: 0});
    setTimeout(() => {
      loading.style.display = "none";
      moveBottomTop(title1, 0, 1.5);
      moveBottomTop(title2, 0.2, 1.4);
      moveBottomTop(title3, 0.35, 1.35);
      moveRightLeft(titleDate1, 0.15, 1.5);
      moveRightLeft(titleDate2, 0.15, 1.5);
      moveRightLeft(subtitle1, 0.23, 1.4);
      moveRightLeft(subtitle2, 0.24, 1.4);
      moveRightLeft(titleImg, 0.3, 1.5);  
    }, 800);
  });

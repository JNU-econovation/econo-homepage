import { $, $$ } from "./utils.mjs";

const projectImg = {
  0: "./static/images/theEcono_1_1.png",
  1: "./static/images/sleeper_1_1.jpg",
  2: "./static/images/gikhub_1_1.png",
  3: "./static/images/date_now_1_1.jpg",
  4: "./static/images/esoup_1_1.png",
  5: "./static/images/gagule_1_1.png",
};

document.addEventListener("DOMContentLoaded", () => {
  const projectList = $$(".project-list>div");
  const mouseDelay = $(".mouse-delay");
  const projectImgElement = $(".clipped-img");
  
  projectList.forEach((project, index) => {
    project.addEventListener("mouseover", (e) => {
      projectImgElement.setAttribute("xlink:href", `${projectImg[index]}`);
      mouseDelay.classList.add("project-img");
    });
    project.addEventListener("mouseout", (e) => {
      projectImgElement.setAttribute("xlink:href", "");
      mouseDelay.classList.remove("project-img");
    });
  });
});

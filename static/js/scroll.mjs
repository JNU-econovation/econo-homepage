import { $ } from "./utils.mjs";

const windowHeight = window.innerHeight;
const peopleTitleElement = $(".people-title");
const peopleSubtitleElement = $(".people-subtitle");
const peopleTitleCoverElement = $(".people-title-cover");
const econovationElement = $(".title-text div:nth-child(1)");
const winterElement = $(".title-text div:nth-child(2)");
const devElement = $(".title-text div:nth-child(3)");
const timeElement = $(".title>div>div:nth-child(2)");
const title2 = $(".title2");
const body = $("body");
const canavs = $("#canvas-cover");

let titleScrollValue = 0;

const updateTitle = () => {
  let ratio = titleScrollValue / windowHeight;
  if (ratio > 1) ratio = 1;
  econovationElement.style.opacity = 1 - ratio;
  timeElement.style.opacity = 1 - ratio;
  winterElement.style.transform = `translate(calc(${26 * ratio}rem + 10rem), ${
    -10 * ratio
  }vh) scale(${1 + ratio})`;
  devElement.style.transform = `translate(calc(${4 * ratio}rem + 32rem), ${
    5 * ratio
  }vh) scale(${1 + ratio})`;
  title2.style.transform = `translate(calc(9.5rem + ${
    100 * (1 - ratio)
  }vw), 47rem)`;
  title2.style.display = "block";
  canavs.style.opacity = 1 - 0.44 * ratio;
};

const initTitle = () => {
  winterElement.style.transform = `translate(10rem, 0)`;
  devElement.style.transform = `translate(32rem, 0);`;
  econovationElement.style.opacity = 1;
  timeElement.style.opacity = 1;
  title2.style.transform = `translate(calc(9.5rem + 100vw), 47rem)`;
  title2.style.display = "none";
  canavs.style.opacity = 1;
};

const afterTitle = () => {
  winterElement.style.transform = `translate(36rem, -10vh) scale(2)`;
  devElement.style.transform = `translate(36rem, 5vh) scale(2)`;
  econovationElement.style.opacity = 0;
  timeElement.style.opacity = 0;
  title2.style.transform = `translate(9.5rem, 47rem)`;
  title2.style.display = "block";
  canavs.style.opacity = 0.44;
};

document.addEventListener("DOMContentLoaded", () => {
  let peopleValue = 0;

  const mouseDelay = document.querySelector(".mouse-delay");
  const mouse = document.querySelector(".mouse");

  window.addEventListener("mousemove", (e) => {
    mouseDelay.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
    mouse.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
  });
  window.addEventListener("wheel", (e) => {
    mouseDelay.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
    mouse.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
  });

  const changePeopleValue = (value, title, subtitle) => {
    if (peopleValue != value) {
      peopleTitleCoverElement.classList.add("changed-text");
      setTimeout(() => {
        peopleTitleElement.innerText = title;
        peopleSubtitleElement.innerText = subtitle;
        peopleTitleCoverElement.classList.remove("changed-text");
      }, 300);
    }
    peopleValue = value;
  };

  document.addEventListener("wheel", (e) => {
    if (window.scrollY == 0) {
      body.classList.add("no-scroll");
      initTitle();
    }
    titleScrollValue -= e.wheelDelta * 0.3;

    if (titleScrollValue < 0) {
      titleScrollValue = 0;
    } else if (titleScrollValue > windowHeight * 1.5) {
      titleScrollValue = windowHeight * 1.5;
      body.classList.remove("no-scroll");
      afterTitle();
    } else {
      updateTitle();
    }
  });

  const body = document.body;
  const html = document.documentElement;

  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  document.addEventListener("scroll", (e) => {
    if (titleScrollValue < windowHeight * 1.5) {
      return;
    }

    if (window.scrollY > height - windowHeight) {
      scrollTo({ top: height - windowHeight});
    }
    if (window.scrollY > windowHeight * 4) {
      changePeopleValue(
        2,
        "Industrious",
        "계획 뿐만 아니라 의미 있는 결실을 이끌어 낼 수 있는 사람"
      );
    } else if (window.scrollY > windowHeight * 3) {
      changePeopleValue(
        1,
        "Cooperation",
        "혼자가 아닌 팀의 소중함과 시너지를 이해하는 사람"
      );
    } else if (window.scrollY > windowHeight * 2) {
      changePeopleValue(0, "Passion", "배움과 성장을 끊임없이 추구하는 사람");
    }
  });
});

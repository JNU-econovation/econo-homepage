const contentsContainer = document.querySelector(".contents-container");
const teamNames = [
  "Kipi",
  "The 地",
  "팀 쿠키",
  "도참없",
  "Surplus",
  "981Prj",
  "노인과 바다",
  "HTG",
  "임무완수",
  "체다치즈",
];

for (let i = 0; i < teamNames.length; i++) {
  const button = document.createElement("button");
  button.classList.add("image-button");

  const img = new Image();
  img.src = "/summer-dev-2023/img/folder.png";
  img.classList.add("folder-img");

  const name = document.createElement("p");
  name.textContent = teamNames[i];
  name.classList.add("team-name");

  button.appendChild(img);
  button.appendChild(name);

  contentsContainer.appendChild(button);
}

const introContainer = document.querySelector(".intro-container");
const folderImg = document.querySelectorAll(".folder-img");
const deleteBtn = document.querySelectorAll(".content-delete-button");
const introKipi = document.querySelector(".intro-kipi");
const introTheg = document.querySelector(".intro-theg");
const introCookie = document.querySelector(".intro-cookie");
const introDcu = document.querySelector(".intro-dcu");
const introSurplus = document.querySelector(".intro-surplus");
const intro981 = document.querySelector(".intro-981");
const introNova = document.querySelector(".intro-nova");
const introHtg = document.querySelector(".intro-htg");
const introTmc = document.querySelector(".intro-tmc");
const introCh = document.querySelector(".intro-chch");

folderImg[0].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introKipi.classList.add("content-visible");
  }, 0);
});

deleteBtn[0].addEventListener("click", () => {
  introKipi.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[1].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introTheg.classList.add("content-visible");
  }, 0);
});

deleteBtn[1].addEventListener("click", () => {
  introTheg.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[2].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introCookie.classList.add("content-visible");
  }, 0);
});

deleteBtn[2].addEventListener("click", () => {
  introCookie.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[3].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introDcu.classList.add("content-visible");
  }, 0);
});

deleteBtn[3].addEventListener("click", () => {
  introDcu.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[4].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introSurplus.classList.add("content-visible");
  }, 0);
});

deleteBtn[4].addEventListener("click", () => {
  introSurplus.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[4].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introSurplus.classList.add("content-visible");
  }, 0);
});

deleteBtn[4].addEventListener("click", () => {
  introSurplus.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[5].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    intro981.classList.add("content-visible");
  }, 0);
});

deleteBtn[5].addEventListener("click", () => {
  intro981.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[6].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introNova.classList.add("content-visible");
  }, 0);
});

deleteBtn[6].addEventListener("click", () => {
  introNova.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[7].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introHtg.classList.add("content-visible");
  }, 0);
});

deleteBtn[7].addEventListener("click", () => {
  introHtg.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[8].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introTmc.classList.add("content-visible");
  }, 0);
});

deleteBtn[8].addEventListener("click", () => {
  introTmc.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

folderImg[9].addEventListener("click", () => {
  introContainer.classList.add("visible");
  setTimeout(() => {
    introCh.classList.add("content-visible");
  }, 0);
});

deleteBtn[9].addEventListener("click", () => {
  introCh.classList.remove("content-visible");
  setTimeout(() => {
    introContainer.classList.remove("visible");
  }, 0);
});

const timeText = document.querySelector(".iphone-time");
const today = new Date();
const dDay = new Date("2023-07-28:13:00:00+0900");
const hourLeft = document.querySelector(".timer-hours");
const minutesLeft = document.querySelector(".timer-minutes");
const dayLeft = document.querySelector(".d-day");
const timeHours = today.getHours();
const timeMinutes = today.getMinutes();
function diffDay() {
  const diff = dDay - today;
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  if (diffDay == 0) {
    dayLeft.textContent = "D-Day";
  } else {
    dayLeft.textContent = `D - ${diffDay}`;
  }
}

const timerInit = () => {
  diffDay();
  setInterval(diffDay, 1000);
};

timerInit();

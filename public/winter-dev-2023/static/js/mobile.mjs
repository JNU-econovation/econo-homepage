import { $ } from "./utils.mjs";

const loadingElement = $("#loading");

document.addEventListener("DOMContentLoaded", () => {
  loadingElement.style.display = "none";
});

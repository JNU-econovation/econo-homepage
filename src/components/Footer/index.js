import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    const onPageLoad = () => {
      let doc = document.querySelector("#titleBar .toggle");
      doc.classList.add("pur");
      let but = document.querySelectorAll(".button.primary");
      but.forEach((el) => el.classList.add("pur"));
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <footer id="footer">
      <ul class="icons">
        <li>
          <a
            href="https://www.facebook.com/econo.jnu.ac.kr"
            class="icon brands alt fa-facebook-f"
          >
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.medium.com/econovation"
            class="icon brands alt fa-medium"
          >
            <span class="label">Medium</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cnu_econovation"
            class="icon brands alt fa-instagram"
          >
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/jnu-econovation"
            class="icon brands alt fa-github"
          >
            <span class="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCepdmgc4w5EQIc1J0lqXVtA/featured"
            class="icon solid alt fa-video"
          >
            <span class="label">youtube</span>
          </a>
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; Econovation. All rights reserved.</li>
        <li>Design: HTML5 UP</li>
      </ul>
    </footer>
  );
}

export default Footer;

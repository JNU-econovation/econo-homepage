import Navigation from "../../../components/Navigation";
import Recruit22Component from "../../../components/recruit/22";
import Footer from "../../../components/Footer";

function Recruit22() {
  // let doc = document.querySelector("#titleBar .toggle");
  // doc.classList.add("pur");
  // let but = document.querySelectorAll(".button.primary");
  // but.forEach((el) => el.classList.add("pur"));

  return (
    <div id="page-wrapper">
      <Navigation />
      <Recruit22Component />
      <Footer />
    </div>
  );
}

export default Recruit22;

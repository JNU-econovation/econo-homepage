import Navigation from "../../../components/Navigation";
import Recruit25Component from "../../../components/recruit/25/index";
import Footer from "../../../components/Footer";

function Recruit25() {
  // let doc = document.querySelector("#titleBar .toggle");
  // doc.classList.add("pur");
  // let but = document.querySelectorAll(".button.primary");
  // but.forEach((el) => el.classList.add("pur"));

  return (
    <div id="page-wrapper">
      <Navigation />
      <Recruit25Component />
      <Footer />
    </div>
  );
}

export default Recruit25;

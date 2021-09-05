import Navigation from '../../../components/Navigation'
import Recruit21Component from '../../../components/recruit/21'
import Footer from '../../../components/Footer'

function Recruit21() {
  // let doc = document.querySelector("#titleBar .toggle");
  // doc.classList.add("pur");
  // let but = document.querySelectorAll(".button.primary");
  // but.forEach((el) => el.classList.add("pur"));

  return (
    <div id="page-wrapper">
      <Navigation />
      <Recruit21Component />
      <Footer />
    </div>
  );
}

export default Recruit21;
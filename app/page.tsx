import Navbar from "@/src/components/common/Navbar.component";
import Footer from "@/src/components/common/Footer.component";
import Service from "@/src/components/main/Service.component";
import Intro from "@/src/components/main/Intro.component";
import Awards from "@/src/components/main/Awards.componont";

const MainPage = () => {
  return (
    <>
      <div className="overflow-hidden max-w-[1920px] m-auto">
        <Navbar />
        <div className="px-12">
          <Intro />
          <Awards />
        </div>
        <Service />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;

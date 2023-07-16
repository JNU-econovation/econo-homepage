import Navbar from "@/src/components/common/Navbar.component";
import Awards from "@/src/components/main/awards.componont";
import Footer from "@/src/components/common/Footer.component";

const MainPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <div className="h-screen"></div>
        <div className="px-12">
          <Awards />
        </div>
        <div className="h-screen"></div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;

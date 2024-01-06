import { Navbar } from "@/src/components/common/Navbar";
import { Footer } from "@/src/components/common/Footer";
import { Service } from "@/src/components/main/Service";
import { Intro } from "@/src/components/main/Intro";
import { Awards } from "@/src/components/main/Award/Awards";
import { Missions } from "@/src/components/main/Missions";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className="m-auto max-w-[1600px] overflow-hidden px-12 max-md:px-4">
        <Intro />
        <Missions />
        <Awards />
        <Service />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;

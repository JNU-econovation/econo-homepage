import { Navbar } from "@/src/components/common/Navbar";
import { Footer } from "@/src/components/common/Footer";
import { Service } from "@/src/components/main/Service";
import { Intro } from "@/src/components/main/Intro";
import { Suspense } from "react";
import { Loading } from "@/src/components/common/Loading";
import { Awards } from "@/src/components/main/Award/Awards";
import { Missions } from "@/src/components/main/Missions";
import { isMobile } from "react-device-detect";
import { cn } from "@/src/functions/util";

const MainPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className={isMobile ? "w-[1600px]" : "m-auto overflow-hidden"}>
        <Navbar />
        <div className={cn(isMobile ? "px-4" : "px-12")}>
          <Intro />
          <Missions />
          <Awards />
        </div>
        <Service />
      </main>
      <Footer />
    </Suspense>
  );
};

export default MainPage;

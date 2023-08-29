"use client";

import Navbar from "@/src/components/common/Navbar.component";
import Footer from "@/src/components/common/Footer.component";
import Service from "@/src/components/main/Service.component";
import Intro from "@/src/components/main/Intro.component";
import { useEffect } from "react";
import Loading from "@/src/components/common/Loading.component";
import { loadingState } from "@/src/stores/common";
import { useAtom } from "jotai";
import Awards from "@/src/components/main/Award/Awards.componont";
import Missions from "@/src/components/main/Missions.component";

const MainPage = () => {
  const [isLoading, setIsLoading] = useAtom(loadingState);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="overflow-hidden max-w-[1920px] m-auto">
        <Navbar />
        <div className="px-12">
          <Intro />
          <Missions />
          <Awards />
        </div>
        <Service />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;

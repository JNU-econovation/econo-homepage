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
import classNames from "classnames";
import { isMobile } from "react-device-detect";

const MainPage = () => {
  const [isLoading, setIsLoading] = useAtom(loadingState);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className={isMobile ? "w-[1920px]" : "overflow-hidden m-auto"}>
        <Navbar />
        <div className={classNames(isMobile ? "px-4" : "px-12")}>
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

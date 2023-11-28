"use client";

import Navbar from "@/src/components/common/Navbar";
import Footer from "@/src/components/common/Footer";
import Service from "@/src/components/main/Service";
import Intro from "@/src/components/main/Intro";
import { useEffect, useState } from "react";
import Loading from "@/src/components/common/Loading";
import Awards from "@/src/components/main/Award/Awards";
import Missions from "@/src/components/main/Missions";
import { isMobile } from "react-device-detect";
import { cn } from "@/src/functions/util";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className={isMobile ? "w-[1920px]" : "overflow-hidden m-auto"}>
        <Navbar />
        <div className={cn(isMobile ? "px-4" : "px-12")}>
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

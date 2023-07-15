"use client";

import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import PortfolioItem from "@/src/components/portfolio/PortfolioTitleImage.component";
import { useEffect, useState } from "react";
import PorfolioDetail from "./PorfolioDetail.component";

const { TITLE, DATA } = PORTFOLIO;

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isShowDetail, setIsShowDetail] = useState(false);

  const showDetail = (selectedProjectIndex = 0) => {
    setIsShowDetail((prev) => !prev);
    setSelectedProject(selectedProjectIndex);
  };

  useEffect(() => {
    const blockScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    if (isShowDetail) {
      window.addEventListener("wheel", blockScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", blockScroll);
    }

    return () => {
      window.removeEventListener("wheel", blockScroll);
    };
  }, [isShowDetail]);

  return (
    <>
      <div className="w-full flex justify-center bg-gradient-to-b from-white z-10 pt-20 fixed top-0 pointer-events-none">
        <h1 className="text-9xl uppercase">{TITLE}</h1>
        <button>
          <img src="/icons/multiply.svg" alt="multiply" />
        </button>
      </div>
      <div className="h-[14rem]"></div>
      <div className="px-12 m-auto max-w-[1920px]">
        {DATA.map((item, index) => (
          <PortfolioItem
            item={item}
            key={index}
            onShowDetailText={() => showDetail(index)}
            isShowDetail={isShowDetail}
          />
        ))}
      </div>
      <div className="fixed bottom-0 w-full bg-gradient-to-t from-white z-10 py-32 pointer-events-none"></div>
      <PorfolioDetail
        item={DATA[selectedProject]}
        isShowDetail={isShowDetail}
      />
    </>
  );
};

export default Portfolio;

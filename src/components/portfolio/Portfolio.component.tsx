"use client";

import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import PortfolioTitleImage from "@/src/components/portfolio/PortfolioTitleImage.component";
import { useEffect, useState } from "react";
import PorfolioDetail from "./PortfolioDetail.component";
import classNames from "classnames";
import PortfolioNavbar from "@/src/components/portfolio/PortfolioNavbar.component";

const { DATA } = PORTFOLIO;

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isShowDetail, setIsShowDetail] = useState(false);

  const showDetail = (selectedProjectIndex = 0) => {
    setIsShowDetail(true);
    setSelectedProject(selectedProjectIndex);
  };

  const closeDetail = () => {
    setIsShowDetail(false);
  };

  useEffect(() => {
    const blockScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    if (isShowDetail) {
      window.addEventListener("wheel", blockScroll);
    } else {
      window.removeEventListener("wheel", blockScroll);
    }

    return () => {
      window.removeEventListener("wheel", blockScroll);
    };
  }, [isShowDetail]);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <button
        className={classNames("fixed w-fit h-fit z-50 left-14 top-14", {
          "brightness-0": !isShowDetail,
        })}
      >
        <img src="/icons/hamburger.svg" alt="hamburger" />
      </button>
      {isShowDetail && (
        <button
          onClick={closeDetail}
          className="fixed w-fit h-fit z-50 left-14 top-32"
        >
          <img src="/icons/left-arrow.svg" alt="arrow-left" />
        </button>
      )}
      <PortfolioNavbar />
      <div className="px-12 m-auto max-w-[1920px]">
        {DATA.map((item, index) => (
          <PortfolioTitleImage
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

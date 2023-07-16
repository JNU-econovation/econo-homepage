"use client";

import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import PortfolioTitleImage from "@/src/components/portfolio/PortfolioTitleImage.component";
import { useEffect, useState } from "react";
import PorfolioDetail from "./PorfolioDetail.component";
import classNames from "classnames";

const { TITLE, DATA } = PORTFOLIO;

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
      <div className="w-full flex justify-center bg-gradient-to-b from-white z-10 pt-20 fixed top-0 pointer-events-none">
        <h1 className="text-9xl uppercase">{TITLE}</h1>
        <button>
          <img src="/icons/multiply.svg" alt="multiply" />
        </button>
      </div>
      <div className="h-[14rem]"></div>
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

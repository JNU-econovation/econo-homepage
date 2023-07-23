"use client";

import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import gsap from "gsap";
import { FC, useEffect } from "react";
import PortfolioImages from "./PortfolioImages.component";
import PortfolioDetailDescription from "./PortfolioDetailDescription.component";
import { isMobile } from "react-device-detect";
import classNames from "classnames";

const { DATA } = PORTFOLIO;

interface PortfolioItemProps {
  item: (typeof DATA)[number];
  isShowDetail: boolean;
}

const PorfolioDetail: FC<PortfolioItemProps> = ({ item, isShowDetail }) => {
  // 아래 함수는 PortfolioItem과 함께 움직인다.
  const onShowDetail = () => {
    gsap.to(".portfolio-item-title", {
      translateY: "0",
      duration: 0.5,
    });

    gsap.to(".portfolio-item-subtitle", {
      translateY: "0",
      duration: 0.7,
    });

    gsap.to(".portfolio-item-title-cover", {
      delay: 1,
      top: "12rem", // 마지막 애니매이션에서 최대 높이를 지정하는 곳
      duration: 0.7,
    });

    gsap.to(".portfolio-item-content", {
      delay: 1,
      translateY: "0",
      duration: 0.7,
    });

    gsap.to(".portfolio-item-teamname", {
      translateY: "0",
      duration: 0.5,
    });

    gsap.to(".portfolio-item-people", {
      translateY: "0",
      duration: 0.7,
    });

    gsap.to(".portfolio-item-images-cover", {
      delay: 1,
      translateY: "0",
      duration: 0.7,
    });
  };

  const deleteShowDetail = () => {
    gsap.to(".portfolio-item-title", {
      translateY: "24rem",
      duration: 0.5,
    });

    gsap.to(".portfolio-item-subtitle", {
      translateY: "24rem",
      duration: 0.7,
    });

    gsap.to(".portfolio-item-title-cover", {
      bottom: 10,
      top: "auto",
      duration: 0.7,
    });

    gsap.to(".portfolio-item-content", {
      translateY: isMobile ? "200vh" : "100vh",
      duration: 0.7,
    });

    gsap.to(".portfolio-item-teamname", {
      translateY: "24rem",
      duration: 0.5,
    });

    gsap.to(".portfolio-item-people", {
      translateY: "24rem",
      duration: 0.7,
    });
    gsap.to(".portfolio-item-images-cover", {
      translateY: "100vh",
      duration: 0.7,
    });
  };

  useEffect(() => {
    if (isShowDetail) {
      onShowDetail();
    } else {
      deleteShowDetail();
    }
  }, [isShowDetail]);

  return (
    <>
      <div className="fixed bottom-10 left-14 z-30 text-white font-bold w-[50%] break-words portfolio-item-title-cover max-lg:w-[90%]">
        <div
          className={classNames(
            "mb-5 translate-y-96 uppercase portfolio-item-title ",
            isMobile ? "text-7xl" : "text-7xl"
          )}
        >
          {item.TITLE}
        </div>
        <div
          className={classNames(
            "translate-y-96 portfolio-item-subtitle leading-relaxed",
            isMobile ? "text-3xl" : "text-xl"
          )}
        >
          {item.SUBTITLE.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
      <PortfolioDetailDescription item={item} />
      <div className="fixed bottom-10 right-14 z-30 text-white text-right font-bold max-lg:hidden">
        <div className="text-2xl mb-5 translate-y-96 portfolio-item-teamname">
          {item.TEAM_NAME}
        </div>
        <div className="text-xl translate-y-96 portfolio-item-people">
          {item.PEOPLE}
        </div>
      </div>
      <div className="flex flex-col gap-4 overflow-x-auto fixed top-32 right-14 z-30 w-[40%] bottom-10 translate-y-[100vh] max-xl:hidden portfolio-item-images-cover">
        <PortfolioImages images={item.INTRODUCTION} />
      </div>
    </>
  );
};

export default PorfolioDetail;

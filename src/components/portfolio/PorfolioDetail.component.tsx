"use client";

import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import gsap from "gsap";
import { FC, useEffect, useRef, useState } from "react";
import PortfolioImages from "./PorfolioImages.component";

const { DATA } = PORTFOLIO;

interface PortfolioItemProps {
  item: (typeof DATA)[number];
  isShowDetail: boolean;
}

const PorfolioDetail: FC<PortfolioItemProps> = ({ item, isShowDetail }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const titleCoverRef = useRef<HTMLDivElement>(null);
  const teamNameRef = useRef<HTMLDivElement>(null);
  const peopleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesCoverRef = useRef<HTMLDivElement>(null);

  // 아래 함수는 PortfolioItem과 함께 움직인다.
  const onShowDetail = () => {
    gsap.to(titleRef.current, {
      translateY: "0",
      duration: 0.5,
    });

    gsap.to(subTitleRef.current, {
      translateY: "0",
      duration: 0.7,
    });

    gsap.to(titleCoverRef.current, {
      delay: 1,
      top: "12rem", // 마지막 애니매이션에서 최대 높이를 지정하는 곳
      duration: 0.7,
    });

    gsap.to(contentRef.current, {
      delay: 1,
      translateY: "0",
      duration: 0.7,
    });

    gsap.to(teamNameRef.current, {
      translateY: "0",
      duration: 0.5,
    });

    gsap.to(peopleRef.current, {
      translateY: "0",
      duration: 0.7,
    });

    gsap.to(imagesCoverRef.current, {
      delay: 1,
      translateY: "0",
      duration: 0.7,
    });
  };

  const deleteShowDetail = () => {
    gsap.to(titleRef.current, {
      translateY: "24rem",
      duration: 0.5,
    });

    gsap.to(subTitleRef.current, {
      translateY: "24rem",
      duration: 0.7,
    });

    gsap.to(titleCoverRef.current, {
      bottom: 10,
      top: "auto",
      duration: 0.7,
    });

    gsap.to(contentRef.current, {
      translateY: "140%",
      duration: 0.7,
    });

    gsap.to(teamNameRef.current, {
      translateY: "24rem",
      duration: 0.5,
    });

    gsap.to(peopleRef.current, {
      translateY: "24rem",
      duration: 0.7,
    });
    gsap.to(imagesCoverRef.current, {
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
      <div
        className="fixed bottom-10 left-14 z-30 text-white font-bold"
        ref={titleCoverRef}
      >
        <div className="text-7xl mb-5 translate-y-96 uppercase" ref={titleRef}>
          {item.TITLE}
        </div>
        <div className="text-xl translate-y-96" ref={subTitleRef}>
          {item.SUBTITLE.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
      <div
        className="fixed flex flex-col bottom-10 left-14 font-semibold z-30 w-[40%] min-w-[40rem] translate-y-[140%] text-white max-lg:w-[90%] top-[24rem] overflow-x-auto"
        ref={contentRef}
      >
        {item.IDEA ? (
          <div className="mt-auto mb-14">
            <div className="text-4xl mb-5">IDEA</div>
            <div className="text-lg">
              {item.IDEA.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {item.SKILLS ? (
          <div>
            <div className="text-4xl mb-5">SKILLS</div>
            <div className="text-lg">
              {item.SKILLS.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="fixed bottom-10 right-14 z-30 text-white text-right font-bold max-lg:hidden">
        <div className="text-2xl mb-5 translate-y-96" ref={teamNameRef}>
          {item.TEAM_NAME}
        </div>
        <div className="text-xl translate-y-96" ref={peopleRef}>
          {item.PEOPLE}
        </div>
      </div>
      <div
        className="fixed top-10 right-14 z-30 w-[40%] h-[calc(100%-2.5rem)] translate-y-[100vh] max-xl:hidden"
        ref={imagesCoverRef}
      >
        <PortfolioImages images={item.INTRODUCTION} />
      </div>
    </>
  );
};

export default PorfolioDetail;

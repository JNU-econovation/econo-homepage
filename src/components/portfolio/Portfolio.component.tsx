"use client";

import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import PortfolioItem from "@/src/components/portfolio/PortfolioItem.component";
import gsap from "gsap";
import { useRef, useState } from "react";

const { TITLE, DATA } = PORTFOLIO;

const Portfolio = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const titleCoverRef = useRef<HTMLDivElement>(null);
  const teamNameRef = useRef<HTMLDivElement>(null);
  const peopleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState(0);

  // 아래 함수는 PortfolioItem과 함께 움직인다.
  const onShowDetail = (selectedProject = 0) => {
    setSelectedProject(selectedProject);

    gsap.to(titleRef.current, {
      translateY: "0",
      duration: 0.5,
    });

    gsap.to(subTitleRef.current, {
      translateY: "0",
      duration: 0.7,
    });

    gsap.to(titleCoverRef.current, {
      delay: 2,
      top: "20rem", // 마지막 애니매이션에서 최대 높이를 지정하는 곳
      duration: 0.7,
    });

    gsap.to(contentRef.current, {
      delay: 2,
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
  };

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
            onShowDetailText={() => onShowDetail(index)}
          />
        ))}
      </div>
      <div className="fixed bottom-0 w-full bg-gradient-to-t from-white z-10 py-32 pointer-events-none"></div>
      <div
        className="fixed bottom-10 left-14 z-30 text-white font-bold"
        ref={titleCoverRef}
      >
        <div className="text-7xl mb-5 translate-y-96 uppercase" ref={titleRef}>
          {DATA[selectedProject].TITLE}
        </div>
        <div className="text-xl translate-y-96" ref={subTitleRef}>
          {DATA[selectedProject].SUBTITLE.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
      <div
        className="fixed bottom-10 left-14 font-semibold z-30 w-[40rem] min-w-96 translate-y-[140%] text-white"
        ref={contentRef}
      >
        {DATA[selectedProject].IDEA ? (
          <div className="mb-14">
            <div className="text-4xl mb-5">IDEA</div>
            <div className="text-lg">
              {DATA[selectedProject].IDEA.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {DATA[selectedProject].SKILLS ? (
          <div>
            <div className="text-4xl mb-5">SKILLS</div>
            <div className="text-lg">
              {DATA[selectedProject].SKILLS.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="fixed bottom-10 right-14 z-30 text-white text-right font-bold">
        <div className="text-2xl mb-5 translate-y-96" ref={teamNameRef}>
          {DATA[selectedProject].TEAM_NAME}
        </div>
        <div className="text-xl translate-y-96" ref={peopleRef}>
          {DATA[selectedProject].PEOPLE}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

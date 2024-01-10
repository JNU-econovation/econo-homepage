"use client";

import { Award } from "@/src/constants/award.ko";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, RefObject, useEffect, useRef } from "react";
import { AwardGroupItem } from "./GroupItem";

interface AwardGroupProps {
  data: Award;
  awardYearProgressRef: RefObject<HTMLDivElement>;
}

gsap.registerPlugin(ScrollTrigger);
const currentYear = new Date().getFullYear();
let awardYear = currentYear;

export const AwardGroup: FC<AwardGroupProps> = ({
  data,
  awardYearProgressRef,
}) => {
  const awardSplitRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      awardSplitRef.current.forEach((item: HTMLDivElement) => {
        gsap.to(item, {
          x: "0",
          ease: "power1.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top +=20%",
            scrub: 1,
            onEnterBack: () => {
              gsap.to(".award-year", {
                translateY: `${
                  ((++awardYear - currentYear) * 100) / (currentYear - 2018)
                }%`,
                ease: "power1.out",
              });
            },
            onLeave: () => {
              gsap.to(".award-year", {
                translateY: `${
                  ((--awardYear - currentYear) * 100) / (currentYear - 2018)
                }%`,
                ease: "power1.out",
              });
            },
            onUpdate: (e) => {
              if (awardYearProgressRef.current) {
                awardYearProgressRef.current.style.width = `${
                  e.progress * 100
                }%`;
              }
            },
          },
        });
      });
    });
    return () => {
      ctx.revert();
    };
  }, [awardYearProgressRef]);
  return (
    <div className="my-12 flex flex-col border-l border-black pl-4">
      {data.DATA.map((data, index) => (
        <AwardGroupItem data={data} key={index} />
      ))}
      <div
        className="translate-x-[15vw] translate-y-6 border-b-[1px] border-black"
        ref={(el) =>
          (awardSplitRef.current[awardSplitRef.current.length] = el!)
        }
      ></div>
    </div>
  );
};

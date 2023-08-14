"use client";

import { Award } from "@/src/assets/constants/award.ko";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, RefObject, useLayoutEffect, useRef } from "react";
import AwardGroupItem from "./AwardGroupItem.component";

interface AwardGroupProps {
  data: Award;
  awardYearProgressRef: RefObject<HTMLDivElement>;
}

gsap.registerPlugin(ScrollTrigger);
const currentYear = new Date().getFullYear();
let awardYear = currentYear;

const AwardGroup: FC<AwardGroupProps> = ({ data, awardYearProgressRef }) => {
  const awardSplitRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
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
              gsap.to(".awardYear", {
                translateY: `${
                  ((++awardYear - currentYear) * 100) / (currentYear - 2018)
                }%`,
                ease: "power1.out",
              });
            },
            onLeave: () => {
              gsap.to(".awardYear", {
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
  }, []);
  return (
    <div className="flex flex-col gap-12 border-l border-black pl-8 my-12">
      {data.DATA.map((data, index) => (
        <AwardGroupItem data={data} key={index} />
      ))}
      <div
        className="translate-x-[15vw] border-b-[1px] border-black translate-y-6"
        ref={(el) =>
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          (awardSplitRef.current[awardSplitRef.current.length] = el!)
        }
      ></div>
    </div>
  );
};

export default AwardGroup;

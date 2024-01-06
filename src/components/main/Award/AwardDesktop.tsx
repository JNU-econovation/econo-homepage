"use client";

import { AWARDS } from "@/src/constants/award.ko";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { AwardGroup } from "./Group";

gsap.registerPlugin(ScrollTrigger);
const currentYear = new Date().getFullYear();

export const AwardDesktop = () => {
  const awardRef = useRef<HTMLDivElement>(null);
  const awardYearsRef = useRef<HTMLDivElement>(null);
  const awardYearsCoverRef = useRef<HTMLDivElement>(null);
  const awardYearProgressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(awardYearsRef.current, {
        scrollTrigger: {
          trigger: awardYearsCoverRef.current,
          start: "top top",
          end: "bottom +=20%",
          scrub: 0.5,
          pin: awardYearsRef.current,
        },
      });
    }, awardYearsCoverRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex justify-between pt-4">
      <div className="w-1/2 flex-1 " ref={awardYearsCoverRef}>
        <div className="font-medium" ref={awardYearsRef}>
          <h1 className="mt-4 uppercase">awards</h1>
          <div className="my-4 h-20 overflow-hidden text-7xl">
            <div className="award-year">
              {Array.from({ length: currentYear - 2018 }).map((_, index) => (
                <div key={index} className="text-7xl">
                  {currentYear - index}
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="h-6 overflow-hidden">
              <div className="award-year">
                {Array.from({ length: currentYear - 2018 }).map((_, index) => (
                  <div key={index}>{currentYear - index}</div>
                ))}
              </div>
            </div>
            <div className="flex w-[30%] items-center justify-start">
              <div
                className="mx-4 translate-y-[calc(-50%-1px)] border-b-[1px] border-black"
                ref={awardYearProgressRef}
              ></div>
            </div>
            <div>2020</div>
          </div>
        </div>
      </div>
      <div className="min-w-[52rem] flex-1 flex-shrink" ref={awardRef}>
        {AWARDS.map((data, index) => (
          <AwardGroup
            key={index}
            data={data}
            awardYearProgressRef={awardYearProgressRef}
          />
        ))}
      </div>
    </div>
  );
};

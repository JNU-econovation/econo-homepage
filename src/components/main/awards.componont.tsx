"use client";

import { AWARDS } from "@/src/assets/constants/award.ko";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import AwardGroup from "./AwardGroup.component";

gsap.registerPlugin(ScrollTrigger);
const currentYear = new Date().getFullYear();

const Awards = () => {
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
      <div className="flex-1 w-1/2 " ref={awardYearsCoverRef}>
        <div className="font-medium" ref={awardYearsRef}>
          <h1 className="uppercase mt-4">awards</h1>
          <div className="text-7xl my-4 h-20 overflow-hidden">
            <div className="awardYear">
              {Array.from({ length: currentYear - 2018 }).map((_, index) => (
                <div key={index} className="text-7xl">
                  {currentYear - index}
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="overflow-hidden h-6">
              <div className="awardYear">
                {Array.from({ length: currentYear - 2018 }).map((_, index) => (
                  <div key={index}>{currentYear - index}</div>
                ))}
              </div>
            </div>
            <div className="w-[30%] flex justify-start items-center">
              <div
                className="border-b-[1px] border-black translate-y-[calc(-50%-1px)] mx-4"
                ref={awardYearProgressRef}
              ></div>
            </div>
            <div>2020</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex-shrink min-w-[52rem]" ref={awardRef}>
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

export default Awards;

"use client";

import { AWARDS } from "@/src/assets/constants/award.ko";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const currentYear = new Date().getFullYear();

const Awards = () => {
  const awardItemsRef = useRef<HTMLDivElement[]>([]);
  const awardSplitRef = useRef<HTMLDivElement[]>([]);
  const awardRef = useRef<HTMLDivElement>(null);
  const awardYearsRef = useRef<HTMLDivElement>(null);
  const awardYearsCoverRef = useRef<HTMLDivElement>(null);
  const awardYearProgressRef = useRef<HTMLDivElement>(null);
  let awardYear = currentYear;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      awardItemsRef.current.forEach((item: HTMLDivElement) => {
        gsap.to(item, {
          x: "0",
          ease: "power1.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top +=20%",
            scrub: 1,
          },
        });
      });

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
          <div
            key={index}
            className="flex flex-col gap-12 border-l border-black pl-8 my-12"
          >
            {data.DATA.map((data, dindex) => (
              <div
                key={dindex}
                className="translate-x-[15vw] flex justify-between text-2xl"
                ref={(el) =>
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  (awardItemsRef.current[awardItemsRef.current.length] = el!)
                }
              >
                <div className="font-light">{data.TITLE}</div>
                <div className="font-normal">{data.AWARDS.join(", ")}</div>
              </div>
            ))}
            <div
              className="translate-x-[15vw] border-b-[1px] border-black translate-y-6"
              ref={(el) =>
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                (awardSplitRef.current[awardSplitRef.current.length] = el!)
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;

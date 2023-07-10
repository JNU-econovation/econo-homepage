"use client";

import { AWARDS } from "@/src/assets/constants/award.ko";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  const awardItemsRef = useRef<HTMLDivElement[]>([]);
  const awardRef = useRef<HTMLDivElement>(null);
  const awardYearsRef = useRef<HTMLDivElement>(null);
  const awardYearsCoverRef = useRef<HTMLDivElement>(null);

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

      gsap.to(awardYearsRef.current, {
        scrollTrigger: {
          trigger: awardYearsCoverRef.current,
          start: "top top",
          end: "bottom +=40%",
          scrub: 0.5,
          pin: awardYearsRef.current,
        },
      });
    }, awardYearsCoverRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex justify-between pt-4">
      <div className="flex-1" ref={awardYearsCoverRef}>
        <div className="font-medium" ref={awardYearsRef}>
          <h1 className="uppercase">awards</h1>
          <div className="text-7xl my-4">2023</div>
          <div className="flex">
            <div>2020</div>
            <div className="w-[30%] border-b-[1px] border-black translate-y-[calc(-50%-1px)] mx-4"></div>
            <div>2023</div>
          </div>
        </div>
      </div>
      <div className="flex-1 " ref={awardRef}>
        {AWARDS.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-8 border-l-[1px] border-black pl-8 my-12"
          >
            {data.DATA.map((data, dindex) => (
              <div
                key={dindex}
                className="translate-x-[15vw] flex justify-between font-medium text-2xl"
                ref={(el) =>
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  (awardItemsRef.current[awardItemsRef.current.length] = el!)
                }
              >
                <div className="">{data.TITLE}</div>
                <div>{data.AWARDS.join(", ")}</div>
              </div>
            ))}
            <div
              className="translate-x-[15vw] border-b-[1px] border-black translate-y-4"
              ref={(el) =>
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                (awardItemsRef.current[awardItemsRef.current.length] = el!)
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;

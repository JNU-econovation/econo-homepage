import strings from "@/assets/strings/award.ko.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  let awardItemsNum = 0;
  const awardItemsRef = useRef<HTMLDivElement[]>([]);
  const awardRef = useRef<HTMLDivElement>(null);
  const awardYearsRef = useRef<HTMLDivElement>(null);
  const awardYearsCoverRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (typeof self.selector !== "function") return;

      awardItemsRef.current.forEach((item: HTMLDivElement) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top 0%",
            scrub: 0.5,
            markers: true,
          },
        });
        tl.to(item, {
          x: 0,
        });
      });

      gsap.to(awardYearsRef.current, {
        scrollTrigger: {
          trigger: awardYearsCoverRef.current,
          start: "top top",
          end: "bottom +=50%",
          scrub: 0.5,
          pin: awardYearsRef.current,
        },
      });
    }, awardYearsCoverRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex justify-between pt-4">
      <div
        className="flex-1 border-r-[1px] border-black"
        ref={awardYearsCoverRef}
      >
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
      <div className="flex-1 pl-4" ref={awardRef}>
        {strings.map((data, index) => (
          <div key={index} className="flex flex-col gap-8">
            {data.data.map((data, dindex) => (
              <div
                key={dindex}
                className="translate-x-[15vw] flex justify-between font-medium text-2xl"
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ref={(el) => (awardItemsRef.current[awardItemsNum++] = el!)}
              >
                <div className="">{data.title}</div>
                <div>{data.award}</div>
              </div>
            ))}
            <div
              className="translate-x-[15vw] border-b-[1px] mb-8 border-black"
              ref={(el) => awardItemsRef.current[awardItemsNum++] == el}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;

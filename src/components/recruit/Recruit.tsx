import { RECRUIT } from "@/src/constants/recruit/recruit.ko";
import { LinkTo } from "../common/LinkTo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import gsap from "gsap";
import { HambergerMenu } from "../common/Hamberger";

gsap.registerPlugin(ScrollTrigger);

export const Recruit = () => {
  useEffect(() => {
    gsap.to(".recruit-skedule-arrow", {
      width: "100%",
      scrollTrigger: {
        trigger: ".recruit-skedule-arrow",
        start: "top +=70%",
      },
    });
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center text-xl leading-relaxed">
      <HambergerMenu />
      <div>
        <h1 className="my-8 text-center text-[9.5rem] font-bold uppercase leading-[9.5rem]">
          {RECRUIT.TITLE}
        </h1>
        <div className="my-20 text-center">
          {RECRUIT.CONTENT.split("\n").map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
        {RECRUIT.IS_ON && (
          <div className="mb-32 mt-24 flex items-center justify-center">
            <a
              href="https://recruit.econovation.kr/application"
              className="flex items-center gap-4 rounded-full bg-[#0038FF] px-6 py-3 text-xl text-white"
            >
              <span>{RECRUIT.GENERTAION}기 지원하기</span>
              <img
                className="h-6"
                src="/icons/right-arrow-circle-white.svg"
                alt="right arrow"
              />
            </a>
          </div>
        )}
      </div>
      <div className="grid w-full grid-cols-[repeat(2,minmax(16rem,_1fr))] gap-16 xl:grid-cols-[repeat(4,minmax(16rem,_1fr))]">
        {RECRUIT.SCHEDULE.map((d, i) => (
          <div className="w-full" key={i}>
            <div className="mb-6 text-6xl tracking-tighter">{d.DATE}</div>
            <div className="recruit-skedule-arrow  relative w-0 border-t-[0.5px] border-black after:absolute after:-bottom-[6px] after:right-[1px] after:h-[12px] after:w-[12px] after:rotate-45 after:border-r-[1px] after:border-t-[1px] after:border-black"></div>
            <div className="mt-4 text-lg">{d.TEXT}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

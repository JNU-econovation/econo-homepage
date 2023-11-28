import { RECRUIT_FLOAT } from "@/src/constants/recruit/recruit.ko";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { LinkTo } from "../common/LinkTo";
import { useTimeDiffer } from "@/src/hooks/useTimeDiffer";

export const RecruitFloat = () => {
  const recruitDate = new Date(RECRUIT_FLOAT.RECRUIT_START_DATE);
  const floatRef = useRef<HTMLDivElement>(null);
  const floatDetailRef = useRef<HTMLDivElement>(null);
  const { days, hours, minutes, seconds } = useTimeDiffer(recruitDate);

  const showDetail = () => {
    gsap.to(floatDetailRef.current, {
      duration: 0.5,
      bottom: "-1rem",
      ease: "back.out",
    });
    gsap.to(floatRef.current, {
      duration: 0.5,
      bottom: "-150%",
      ease: "back.in",
    });
  };

  const closeDetail = () => {
    gsap.to(floatDetailRef.current, {
      duration: 0.5,
      bottom: "-200%",
      ease: "back.in",
    });
    gsap.to(floatRef.current, {
      duration: 0.5,
      bottom: "-1rem",
      ease: "back.out",
    });
  };

  return (
    <div
      className="fixed bottom-0 h-16 w-full z-[200] max-w-[calc(1980px-3.5rem)]"
      onMouseEnter={showDetail}
      onMouseLeave={closeDetail}
    >
      <div
        className="bg-black absolute -bottom-4 rounded-t-3xl text-white pt-4 pb-8 px-8 text-2xl uppercase group font-bold"
        ref={floatRef}
      >
        {RECRUIT_FLOAT.ECONO_IS_RECRUITING}
      </div>
      <div
        className="absolute -bottom-[200%] pb-8 pt-4 px-8 w-[calc(100%-6rem)] bg-black text-white rounded-t-3xl font-semibold"
        ref={floatDetailRef}
      >
        <div className="pb-2 border-b-white border-b-2 flex justify-between px-4">
          <div className="flex gap-4 items-baseline">
            <div className="uppercase text-3xl">
              {RECRUIT_FLOAT.ECONO_GENERTAION_RECRUIT_EN}
            </div>
            <div>{RECRUIT_FLOAT.ECONO_GENERTAION_RECRUIT_KR}</div>
          </div>
          <div className="flex gap-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center mr-4">
                <div className="text-3xl">{days}</div>
                <div className="text-[0.5rem] uppercase">
                  {RECRUIT_FLOAT.DAY}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl opacity-90">{hours}</div>
                <div className="text-[0.5rem] uppercase">
                  {RECRUIT_FLOAT.HOUR}
                </div>
              </div>
              <Image
                className="mb-4"
                src={require("/public/icons/colon.svg").default}
                alt="colon"
              />
              <div className="flex flex-col items-center">
                <div className="text-3xl opacity-90">{minutes}</div>
                <div className="text-[0.5rem] uppercase">
                  {RECRUIT_FLOAT.MINUTE}
                </div>
              </div>
              <Image
                className="mb-4"
                src={require("/public/icons/colon.svg").default}
                alt="colon"
              />
              <div className="flex flex-col items-center">
                <div className="text-3xl opacity-90">{seconds}</div>
                <div className="text-[0.5rem] uppercase">
                  {RECRUIT_FLOAT.SECOND}
                </div>
              </div>
            </div>
            <LinkTo
              link="RECRUIT"
              className="bg-white rounded-full h-10 w-10 flex justify-center items-center"
            >
              <Image
                src={require("/public/icons/right-arrow.svg").default}
                alt="right-arrow"
              />
            </LinkTo>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import {
  RECRUIT,
  RECRUIT_FLOAT,
  type RecruitStatus,
} from "@/src/constants/recruit/recruit.ko";
import Image from "next/image";
import { LinkTo } from "../common/LinkTo";
import { useTimeDiffer } from "@/src/hooks/useTimeDiffer";
import useFloatAnimation from "../../hooks/useFloatAnimation";
import useRecruitStatus from "../../hooks/useRecruitStatus";
import HoverText from "./RecruitFloat/HoverText";
import RecruitTimer from "./RecruitFloat/RecruitTimer";
import { exhaustiveError } from "../../functions/util";

const renderwordByRecruitStatus = (recruitStatus: RecruitStatus) => {
  switch (recruitStatus) {
    case "READY":
      return (
        <span>
          <span className="text-white">시작</span>까지
        </span>
      );
    case "OPEN":
      return (
        <span>
          <span className="text-white">마감</span>까지
        </span>
      );
    case "CLOSED":
      return <></>;
    default:
      exhaustiveError(recruitStatus);
  }
};

export const RecruitFloat = () => {
  const recruitStartDate = new Date(RECRUIT.START_DATE);
  const recruitEndDate = new Date(RECRUIT.END_DATE);
  const { floatDetailRef, floatRef, showDetail, closeDetail } =
    useFloatAnimation();
  const { days, hours, minutes, seconds } = useTimeDiffer(recruitStartDate);
  const {
    days: endDays,
    hours: endHours,
    minutes: endMinutes,
    seconds: endSeconds,
  } = useTimeDiffer(recruitEndDate);
  const { recruitStatus } = useRecruitStatus();

  if (recruitStatus !== "CLOSED") {
    return (
      <div
        className="fixed bottom-0 z-[200] h-16 w-full max-w-[1600px]"
        onMouseEnter={showDetail}
        onMouseLeave={closeDetail}
      >
        <div
          className="group absolute -bottom-4 rounded-t-3xl bg-black px-8 pb-8 pt-4 text-2xl font-bold uppercase text-white"
          ref={floatRef}
        >
          <HoverText status={recruitStatus} days={days} />
        </div>
        <div
          className="absolute -bottom-[200%] w-[calc(100%-6rem)] rounded-t-3xl bg-black px-8 pb-8 pt-4 font-semibold text-white"
          ref={floatDetailRef}
        >
          <div className="flex justify-between border-b-2 border-b-white px-4 pb-2">
            <div className="flex items-baseline gap-4">
              <div className="text-3xl uppercase">
                {RECRUIT_FLOAT.ECONO_GENERTAION_RECRUIT_EN}
              </div>
              <div className="text-neutral-300">
                <span>에코노베이션</span>
                <span className="text-white">{` ${RECRUIT.GENERATION}기 `}</span>
                <span>신입 모집&nbsp;</span>
                {renderwordByRecruitStatus(recruitStatus)}
              </div>
            </div>
            <div className="flex gap-8">
              {recruitStatus === "OPEN" && (
                <RecruitTimer
                  days={endDays}
                  hours={endHours}
                  minutes={endMinutes}
                  seconds={endSeconds}
                />
              )}
              {recruitStatus === "READY" && (
                <RecruitTimer
                  days={days}
                  hours={hours}
                  minutes={minutes}
                  seconds={seconds}
                />
              )}

              <LinkTo
                link="RECRUIT"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
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
  }
  return null;
};

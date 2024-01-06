import { MAIN } from "@/src/constants/common.ko";
import Image from "next/image";
import econovationBlackLogo from "/public/images/econovation-black.svg";
import { InfinityAutoScroll } from "../common/InfinityAutoScroll";
import { ABOUT, JOBS } from "@/src/constants/main.ko";
import { Fragment } from "react";
import { RECRUIT } from "@/src/constants/recruit/recruit.ko";
import { RecruitFloat } from "./RecruitFloat";
import { cn } from "@/src/functions/util";

export const Intro = () => {
  return (
    <>
      {RECRUIT.IS_ON && <RecruitFloat />}
      <h1>
        <Image
          className="w-full"
          src={econovationBlackLogo}
          alt="ECONOVATION"
        />
      </h1>
      <h2
        className={cn(
          "my-8 text-7xl font-semibold uppercase max-xl:my-4 max-lg:text-4xl max-md:text-2xl"
        )}
      >
        {MAIN.SUBTITLE}
      </h2>
      <InfinityAutoScroll className="bg-[#0038FF]" multiple={8} reverse>
        {JOBS.map((field, index) => (
          <Fragment key={index}>
            <div
              className={cn(
                "p-2 text-3xl uppercase text-white max-lg:text-base"
              )}
            >
              {field}
            </div>
            <div className="mx-4 h-1 w-1 rounded-full bg-white"></div>
          </Fragment>
        ))}
      </InfinityAutoScroll>
      <div
        className={cn("grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-lg:gap-2")}
      >
        {ABOUT.map((field, index) => (
          <div key={index} className="mt-4 uppercase">
            <Image
              className="w-full"
              placeholder="blur"
              src={field.IMAGE}
              alt={field.TITLE}
            />
            <div className="mt-4 border-t border-black py-2 text-xs">
              {field.SUBTITLE}
            </div>
            <div className="text-base md:text-xl xl:text-2xl">
              {field.TITLE}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

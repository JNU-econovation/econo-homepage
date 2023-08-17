import { MAIN } from "@/src/constants/common.ko";
import Image from "next/image";
import econovationBlackLogo from "/public/images/econovation-black.svg";
import InfinityAutoScroll from "../common/InfinityAutoScroll.component";
import { ABOUT, ECONOVATION, JOBS } from "@/src/constants/main.ko";
import { Fragment } from "react";
import { RECRUIT } from "@/src/constants/recruit.ko";
import RecruitFloat from "./RecruitFloat.component";

const Intro = () => {
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
      <h2 className="uppercase text-7xl font-semibold my-8">{MAIN.SUBTITLE}</h2>
      <InfinityAutoScroll className="bg-[#0038FF]" multiple={8}>
        {JOBS.map((field, index) => (
          <Fragment key={index}>
            <div className="text-3xl uppercase p-2 text-white">{field}</div>
            <div className="mx-4 w-1 h-1 bg-white rounded-full"></div>
          </Fragment>
        ))}
      </InfinityAutoScroll>
      <div className="grid grid-cols-4 gap-4">
        {ABOUT.map((field, index) => (
          <div key={index} className="text-2xl my-4 uppercase">
            <Image
              className="w-full"
              placeholder="blur"
              src={field.IMAGE}
              alt={field.TITLE}
            />
            <div className="border-t border-black mt-4 py-2 text-xs">
              {field.SUBTITLE}
            </div>
            <div className="text-2xl">{field.TITLE}</div>
          </div>
        ))}
      </div>
      <div className="py-96">
        <div className="absolute left-0 w-full -translate-y-28">
          <InfinityAutoScroll multiple={10}>
            <div className="text-7xl uppercase">{ECONOVATION}</div>
            <div className="flex justify-center items-center w-16 h-16 bg-[#0038FF] mx-8 rounded-full p-4">
              <Image
                src={require("/public/icons/right-up-direction.svg").default}
                alt="right-up-direction"
              />
            </div>
          </InfinityAutoScroll>
        </div>
      </div>
    </>
  );
};

export default Intro;

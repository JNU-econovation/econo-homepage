import { MAIN } from "@/src/assets/constants/common.ko";
import Image from "next/image";
import econovationBlackLogo from "/public/images/econovation-black.svg";
import InfinityAutoScroll from "../common/InfinityAutoScroll.component";
import { ECONOVATION, JOBS } from "@/src/assets/constants/main.ko";
import { Fragment } from "react";
import { RECRUIT } from "@/src/assets/constants/recruit.ko";
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
      <InfinityAutoScroll multiple={4}>
        <div className="text-7xl uppercase">{ECONOVATION}</div>
        <div className="flex justify-center items-center w-16 h-16 bg-[#0038FF] mx-8 rounded-full p-4">
          <Image
            src={require("/public/icons/right-up-direction.svg").default}
            alt="right-up-direction"
          />
        </div>
      </InfinityAutoScroll>
    </>
  );
};

export default Intro;

import { MAIN } from "@/src/assets/constants/common.ko";
import Image from "next/image";
import econovationBlackLogo from "/public/images/econovation-black.svg";

const Intro = () => {
  return (
    <>
      <h1>
        <Image
          className="w-full"
          src={econovationBlackLogo}
          alt="ECONOVATION"
        />
      </h1>
      <h2 className="uppercase text-7xl font-semibold my-8">{MAIN.SUBTITLE}</h2>
    </>
  );
};

export default Intro;

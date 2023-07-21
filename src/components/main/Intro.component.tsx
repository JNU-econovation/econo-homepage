import { MAIN } from "@/src/assets/constants/common.ko";
import Image from "next/image";

const Intro = () => {
  return (
    <>
      <h1>
        <Image
          className="w-full"
          src={require("@/public/images/econovation_black.svg").default}
          alt="ECONOVATION"
        />
      </h1>
      <h2 className="uppercase text-7xl font-semibold my-8">{MAIN.SUBTITLE}</h2>
    </>
  );
};

export default Intro;

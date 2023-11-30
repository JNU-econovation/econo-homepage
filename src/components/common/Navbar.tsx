"use client";

import { RECRUIT } from "@/src/constants/recruit/recruit.ko";
import { LinkTo } from "@/src/components/common/LinkTo";
import { MAIN_NAV, MENU_STRING } from "@/src/constants/main.ko";
import { isMobile } from "react-device-detect";

export const Navbar = () => {
  return !isMobile ? (
    <nav className="flex w-full justify-between min-h-fit px-12 my-12">
      <div>
        {MAIN_NAV.filter((data) => data.POSITION === "left").map((data) => (
          <LinkTo
            className="py-4 px-8 uppercase text-xl"
            key={data.LINK}
            link={data.LINK}
          >
            {data.NAME}
          </LinkTo>
        ))}
      </div>
      <div>
        {MAIN_NAV.filter((data) => data.POSITION === "right").map((data) => (
          <LinkTo
            className="p-2 bg-[#0038FF] text-white uppercase text-xl"
            key={data.LINK}
            link={data.LINK}
          >
            {`${RECRUIT.GENERTAION}TH`} {data.NAME}
          </LinkTo>
        ))}
      </div>
    </nav>
  ) : (
    <nav className="flex w-full justify-between min-h-fit px-4 mt-12 mb-6 text-xl">
      {MENU_STRING}
    </nav>
  );
};

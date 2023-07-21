"use client";

import { NAV } from "@/src/assets/constants/nav.ko";
import { RECRUIT } from "@/src/assets/constants/recruit.ko";
import LinkTo from "@/src/components/common/LinkTo.component";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between min-h-fit px-12 my-12">
      <div>
        {NAV.filter((data) => data.POSITION === "left").map((data) => (
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
        {NAV.filter((data) => data.POSITION === "right").map((data) => (
          <LinkTo
            className="p-2 bg-[#0038FF] text-white uppercase text-xl"
            key={data.LINK}
            link={data.LINK}
          >
            {`${RECRUIT.PERIOD}TH`} {data.NAME}
          </LinkTo>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

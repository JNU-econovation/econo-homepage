"use client";

import { AwardDesktop } from "./AwardDesktop";
import { AwardMobile } from "./AwardMobile";

export const Awards = () => {
  return (
    <>
      <div className="max-xl:hidden">
        <AwardDesktop />
      </div>
      <div className="xl:hidden">
        <AwardMobile />
      </div>
    </>
  );
};

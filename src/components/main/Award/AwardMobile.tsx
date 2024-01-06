import { AWARDS } from "@/src/constants/award.ko";
import { gsap } from "gsap";
import { Fragment, useState } from "react";

const awardOpen = (index: number) => {
  gsap.to(`#award-${index}`, {
    height: "auto",
    opacity: "1",
    duration: 0.5,
  });
};

const awardClose = (index: number) => {
  gsap.to(`#award-${index}`, {
    height: "0",
    opacity: "0",
    duration: 0.5,
  });
};

export const AwardMobile = () => {
  const [showedAwardIndex, setShowedAwardIndex] = useState(-1);
  const maxAwardLength = AWARDS.length;

  const awardToggle = (position: number) => {
    if (showedAwardIndex === position) {
      awardClose(position);
      setShowedAwardIndex(-1);
      return;
    }
    Array.from({ length: maxAwardLength }).forEach((_, i) => {
      awardClose(i);
    });
    awardOpen(position);
    setShowedAwardIndex(position);
  };

  return (
    <div className="pt-4">
      <h1 className="my-12 text-2xl uppercase">awards</h1>
      <div className="bg-white text-2xl max-sm:text-lg">
        {AWARDS.map((data, index) => (
          <Fragment key={index}>
            <button
              className="w-full bg-white"
              key={index}
              onClick={() => awardToggle(index)}
            >
              <div className="bg-white py-12 text-5xl">{data.YEAR}</div>
            </button>
            <div id={`award-${index}`} className="h-0 opacity-0">
              {data.DATA.map((data, index) => (
                <div key={index} className="my-6 max-sm:my-3">
                  {data.TITLE}
                </div>
              ))}
            </div>
            <hr className="h-0 w-full border-b border-black " />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

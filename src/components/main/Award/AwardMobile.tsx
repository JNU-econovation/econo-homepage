import { AWARDS } from "@/src/constants/award.ko";
import { gsap } from "gsap";
import { useState } from "react";

const awardOpen = (index: number) => {
  gsap.to(`#faq-${index}`, {
    height: "auto",
    duration: 0.5,
  });
};

const awardClose = (index: number) => {
  gsap.to(`#faq-${index}`, {
    height: "0",
    duration: 0.5,
  });
};

export const AwardMobile = () => {
  const [awardBoard, setAwardBoard] = useState(0);

  const awardToggle = (position: number) => {
    // if (i !== position) awardClose(i);
    // else awardOpen(i);
    awardClose(position);
  };

  return (
    <div className="pt-4">
      <h1 className="my-12 text-2xl uppercase">awards</h1>
      <div className="bg-white text-2xl max-sm:text-lg">
        {AWARDS.map((data, index) => (
          <button key={index} onClick={() => awardToggle(index)}>
            <div className="my-12 text-5xl">{data.YEAR}</div>
            {data.DATA.map((data, index) => (
              <div key={index} className="my-6 max-sm:my-3">
                {data.TITLE}
              </div>
            ))}
            <hr className="my-12 h-0 w-full border-b border-black" />
          </button>
        ))}
      </div>
    </div>
  );
};

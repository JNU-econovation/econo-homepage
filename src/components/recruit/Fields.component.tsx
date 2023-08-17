import { RECRUIT } from "@/src/constants/recruit.ko";
import { gsap } from "gsap";
import { ChangeEvent } from "react";

const { FIELDS } = RECRUIT;
const Fileds = () => {
  const contentToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget;

    gsap.context(() => {
      gsap.to(`.${key.id}-content`, {
        height: key.checked ? "auto" : 0,
        autoAlpha: key.checked ? 1 : 0,
        margin: key.checked ? "0 0 1rem" : 0,
      });
      gsap.to(`.${key.id}-button`, {
        rotate: key.checked ? 90 : 0,
      });
    });
  };

  return (
    <div className="flex translate-y-[25%]">
      <h1 className="uppercase font-medium flex-1">{FIELDS.TITLE}</h1>
      <div className="flex-[2_1_0%] min-w-[61.5rem]">
        {FIELDS.TYPE.map((d, i) => (
          <div className="border-t border-black last:border-b" key={i}>
            <input
              type="checkbox"
              name="recruit"
              id={`recruit${i}`}
              className="hidden"
              onChange={contentToggle}
            />
            <label htmlFor={`recruit${i}`} className="cursor-pointer">
              <div className="flex w-full py-6">
                <span className="flex w-full justify-between mr-16 items-center">
                  <h2 className="font-medium text-3xl uppercase">{d.TITLE}</h2>
                  <span>{d.TRANSLATION}</span>
                </span>
                <span>
                  <img
                    className={`recruit${i}-button`}
                    src="/icons/right-arrow-circle.svg"
                    alt="right-arrow"
                  />
                </span>
              </div>
              <div className={`h-0 recruit${i}-content opacity-0`}>
                {d.CONTENT.split("\n").map((cd, ci) => (
                  <div key={ci}>{cd}</div>
                ))}
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fileds;

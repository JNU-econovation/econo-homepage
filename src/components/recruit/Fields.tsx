import strings from "@/components/recruit/recruit.ko.json";
import rightArrowCirle from "@/assets/right-arrow-circle.svg";
import { gsap } from "gsap";
import { ChangeEvent } from "react";
const data = strings.fileds;

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
    <div className="flex justify-between">
      <h1 className="uppercase font-medium flex-1">{data.title}</h1>
      <div className="flex-1">
        {data.types.map((d, i) => (
          <div className="border-t border-black cursor-pointer" key={i}>
            <input
              type="checkbox"
              name="recruit"
              id={`recruit${i}`}
              className="hidden"
              onChange={contentToggle}
            />
            <label
              htmlFor={`recruit${i}`}
              className="flex w-full py-6 cursor-pointer"
            >
              <span className="flex w-full justify-between mr-16 items-center">
                <h2 className="font-medium text-3xl uppercase">{d.title}</h2>
                <span>{d.translation}</span>
              </span>
              <span>
                <img
                  className={`recruit${i}-button`}
                  src={rightArrowCirle}
                  alt="right-arrow"
                />
              </span>
            </label>
            <div className={`h-0 recruit${i}-content opacity-0`}>
              {d.content.split("\n").map((cd, ci) => (
                <div key={ci}>{cd}</div>
              ))}
            </div>
          </div>
        ))}
        <div className="border-t border-black"></div>
      </div>
    </div>
  );
};

export default Fileds;

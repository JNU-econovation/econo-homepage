"use client";

import { Award } from "@/src/constants/award.ko";
import { FC, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextTransition } from "../../common/TextTransition";

interface AwardGroupItemProps {
  data: Award["DATA"][0];
}

export const AwardGroupItem: FC<AwardGroupItemProps> = ({ data }) => {
  const awardItemsRef = useRef<HTMLDivElement[]>([]);
  const awardTeamAndPeopleString = [data.AWARDS.join(", "), ...data.PEOPLE];
  const [stringIndex, setStringIndex] = useState<number>(0);
  const [isStringChange, setIsStringChange] = useState<boolean>(false);
  const intervalId = useRef<any>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      awardItemsRef.current.forEach((item: HTMLDivElement) => {
        gsap.to(item, {
          x: "0",
          ease: "power1.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top +=20%",
            scrub: 1,
          },
        });
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (isStringChange) {
      intervalId.current = setInterval(
        () =>
          setStringIndex((index) => {
            if (index + 1 === awardTeamAndPeopleString.length) {
              clearInterval(intervalId.current);
              return index;
            }
            return index + 1;
          }),
        1000
      );
    } else {
      clearInterval(intervalId.current);
      setTimeout(() => {
        setStringIndex(0);
      }, 300);
    }
    return () => clearInterval(intervalId.current);
  }, [isStringChange, awardTeamAndPeopleString.length]);

  const onHover = () => {
    setIsStringChange(true);
  };

  const onLeave = () => {
    setIsStringChange(false);
  };

  return (
    <div
      className="group flex translate-x-[15vw] justify-between p-4 text-2xl transition-colors duration-300 hover:bg-[#0038FF] hover:text-white"
      ref={(el) => (awardItemsRef.current[awardItemsRef.current.length] = el!)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="font-light">{data.TITLE}</div>
      <TextTransition className="flex-1 justify-end font-normal">
        {
          awardTeamAndPeopleString[
            stringIndex % awardTeamAndPeopleString.length
          ]
        }
      </TextTransition>
    </div>
  );
};

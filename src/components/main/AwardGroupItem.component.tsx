import { Award } from "@/src/assets/constants/award.ko";
import { FC, useRef } from "react";
import gsap from "gsap";

interface AwardGroupItemProps {
  data: Award["DATA"][0];
}

const AwardGroupItem: FC<AwardGroupItemProps> = ({ data }) => {
  const awardItemsRef = useRef<HTMLDivElement[]>([]);

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
    return () => {
      ctx.revert();
    };
  });

  return (
    <div
      className="translate-x-[15vw] flex justify-between text-2xl"
      ref={(el) =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (awardItemsRef.current[awardItemsRef.current.length] = el!)
      }
    >
      <div className="font-light">{data.TITLE}</div>
      <div className="font-normal">{data.AWARDS.join(", ")}</div>
    </div>
  );
};

export default AwardGroupItem;

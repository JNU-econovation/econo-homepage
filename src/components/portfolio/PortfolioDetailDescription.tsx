import { PORTFOLIO } from "@/src/constants/portfolio/portfolio.ko";
import { cn } from "@/src/functions/util";
import { FC } from "react";
import { isMobile } from "react-device-detect";

interface PortfolioDetailDescriptionProps {
  item: (typeof PORTFOLIO.DATA)[number];
}

export const PortfolioDetailDescription: FC<
  PortfolioDetailDescriptionProps
> = ({ item }) => {
  return (
    <div
      className={cn(
        "fixed flex flex-col bottom-10 left-14 z-30 w-[40%] min-w-[40rem] translate-y-[140%] text-white max-lg:w-[90%] overflow-x-auto portfolio-item-content",
        isMobile ? "top-[30rem]" : "top-[24rem]"
      )}
    >
      {item.IDEA ? (
        <div
          className={cn("mb-14", {
            "mt-auto": !isMobile,
          })}
        >
          <div
            className={cn(
              "mb-5 font-semibold",
              isMobile ? "text-6xl" : "text-4xl"
            )}
          >
            IDEA
          </div>
          <div
            className={cn(
              "mb-5 leading-relaxed",
              isMobile ? "text-3xl" : "text-lg"
            )}
          >
            {item.IDEA.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {item.SKILLS ? (
        <div>
          <div
            className={cn(
              "mb-5 font-semibold",
              isMobile ? "text-6xl" : "text-4xl"
            )}
          >
            SKILLS
          </div>
          <div
            className={cn(
              "mb-5 leading-relaxed",
              isMobile ? "text-3xl" : "text-lg"
            )}
          >
            {item.SKILLS.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

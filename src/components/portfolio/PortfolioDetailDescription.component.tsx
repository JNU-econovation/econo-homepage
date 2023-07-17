import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import { FC } from "react";

interface PortfolioDetailDescriptionProps {
  item: (typeof PORTFOLIO.DATA)[number];
}

const PortfolioDetailDescription: FC<PortfolioDetailDescriptionProps> = ({
  item,
}) => {
  return (
    <div className="fixed flex flex-col bottom-10 left-14 font-semibold z-30 w-[40%] min-w-[40rem] translate-y-[140%] text-white max-lg:w-[90%] top-[24rem] overflow-x-auto portfolio-item-content">
      {item.IDEA ? (
        <div className="mt-auto mb-14">
          <div className="text-4xl mb-5">IDEA</div>
          <div className="text-lg">
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
          <div className="text-4xl mb-5">SKILLS</div>
          <div className="text-lg">
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

export default PortfolioDetailDescription;

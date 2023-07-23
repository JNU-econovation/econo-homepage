import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";

interface PortfolioTitleImageProps {
  item: (typeof PORTFOLIO.DATA)[number];
  onShowDetail: () => void;
}

const PortfolioTitleImage: FC<PortfolioTitleImageProps> = ({
  item,
  onShowDetail,
}) => {
  return (
    <button className="w-[40rem]" onClick={onShowDetail}>
      <Image
        className="w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src={item.BG_IMAGE}
        alt={item.TITLE}
        placeholder="blur"
      />
    </button>
  );
};

export default PortfolioTitleImage;

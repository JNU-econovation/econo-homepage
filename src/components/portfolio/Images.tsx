"use client";

import { PORTFOLIO } from "@/src/constants/portfolio/portfolio.ko";
import Image from "next/image";
import { FC } from "react";

interface PortfolioImagesProps {
  images: (typeof PORTFOLIO.DATA)[number]["INTRODUCTION"];
}

export const PortfolioImages: FC<PortfolioImagesProps> = ({ images }) => {
  return (
    <>
      {images.map((image, index) =>
        image.TYPE === "image" ? (
          <Image src={image.LINK} alt={image.LINK} key={index} />
        ) : image.TYPE === "video" ? (
          <iframe
            id="ytplayer"
            width="100%"
            height="500"
            src={image.LINK}
            key={index}
          />
        ) : (
          ""
        )
      )}
    </>
  );
};

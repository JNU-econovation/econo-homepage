"use client";

import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import Image from "next/image";
import { FC, useEffect } from "react";

interface PortfolioImagesProps {
  images: (typeof PORTFOLIO.DATA)[number]["INTRODUCTION"];
}

const PortfolioImages: FC<PortfolioImagesProps> = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <Image src={image.LINK} alt={image.LINK} />
      ))}
    </>
  );
};

export default PortfolioImages;

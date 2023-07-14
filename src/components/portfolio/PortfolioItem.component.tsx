import Image from "next/image";
import { FC, MouseEvent } from "react";
import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import gsap from "gsap";

interface PortfolioItemProps {
  item: (typeof PORTFOLIO.DATA)[number];
  onShowDetailText: () => void;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ item, onShowDetailText }) => {
  const onShowDetail = (e: MouseEvent<HTMLImageElement>) => {
    const clickedElement = e.currentTarget;
    const viewportOffset = clickedElement.getBoundingClientRect();

    gsap.context(() => {
      const tl = gsap.timeline(clickedElement);
      tl.to(clickedElement, {
        left: viewportOffset.left,
        top: viewportOffset.top,
        height: clickedElement.offsetHeight,
        width: clickedElement.offsetWidth,
        duration: 0,
      });

      tl.to(clickedElement, {
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 20,
        x: "0",
        y: "0",
        width: "100vw",
        height: "100vh",
        ease: "sine",
        duration: 1,
        onComplete: onShowDetailText,
      });

      tl.to(clickedElement, {
        delay: 3,
        filter: "blur(10px)",
        duration: 1,
      });
    });
  };

  return (
    <div className="flex justify-center w-full">
      <h2 className="flex-1">{item.TITLE}</h2>
      <div className="flex-1">
        <button className="w-full overflow-hidden h-[40vh]">
          <Image
            className="object-cover object-center w-full h-[40vh]"
            src={item.BG_IMAGE}
            alt={item.TITLE}
            placeholder="blur"
            onClick={onShowDetail}
          />
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;

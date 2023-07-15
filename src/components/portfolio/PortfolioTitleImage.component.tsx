import Image from "next/image";
import { FC, MouseEvent, useRef } from "react";
import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import gsap from "gsap";

interface PortfolioItemProps {
  item: (typeof PORTFOLIO.DATA)[number];
  onShowDetailText: () => void;
  isShowDetail: boolean;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  item,
  onShowDetailText,
  isShowDetail,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onShowDetail = (e: MouseEvent<HTMLImageElement>) => {
    const clickedElement = e.currentTarget;
    const viewportOffset = clickedElement.getBoundingClientRect();
    const coverViewportOffset = buttonRef.current?.getBoundingClientRect();

    gsap.context(() => {
      if (isShowDetail) {
        gsap.to(clickedElement, {
          filter: "blur(0) brightness(1)",
          duration: 0.5,
          left: coverViewportOffset?.left,
          top: coverViewportOffset?.top,
          width: coverViewportOffset?.width,
          height: coverViewportOffset?.height,
          onStart: onShowDetailText,
        });
        gsap.to(clickedElement, {
          delay: 0.5,
          position: "initial",
          height: "40vh",
          onComplete: () => {
            clickedElement.style.width = "100%";
          },
        });
        return;
      }

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
        duration: 0.7,
        onComplete: onShowDetailText,
      });

      tl.to(clickedElement, {
        delay: 1,
        filter: "blur(10px) brightness(0.5)",
        duration: 1,
      });
    });
  };

  return (
    <div className="flex justify-center w-full">
      <h2 className="flex-1">{item.TITLE}</h2>
      <div className="flex-1">
        <button className="w-full overflow-hidden h-[40vh]" ref={buttonRef}>
          <Image
            className="object-cover object-center w-full h-[40vh] blur-0 brightness-100"
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

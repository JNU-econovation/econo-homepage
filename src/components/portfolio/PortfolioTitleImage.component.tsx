import Image from "next/image";
import { FC, MouseEvent, use, useEffect, useRef } from "react";
import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import gsap from "gsap";
import classNames from "classnames";

interface PortfolioTitleImageProps {
  item: (typeof PORTFOLIO.DATA)[number];
  onShowDetailText: () => void;
  isShowDetail: boolean;
}

const PortfolioTitleImage: FC<PortfolioTitleImageProps> = ({
  item,
  onShowDetailText,
  isShowDetail,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const onShowDetail = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (imageRef.current === null) return;

    const viewportOffset = imageRef.current.getBoundingClientRect();
    gsap.context(() => {
      if (isShowDetail) {
        return;
      }

      if (imageRef.current === null) return;
      const tl = gsap.timeline(imageRef.current);
      tl.to(imageRef.current, {
        left: viewportOffset.left,
        top: viewportOffset.top,
        height: imageRef.current.offsetHeight,
        width: imageRef.current.offsetWidth,
        duration: 0,
      });

      tl.to(imageRef.current, {
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

      tl.to(imageRef.current, {
        delay: 1,
        filter: "blur(10px) brightness(0.5)",
        duration: 1,
      });
    });
  };

  useEffect(() => {
    if (!isShowDetail) {
      const coverViewportOffset = buttonRef.current?.getBoundingClientRect();

      gsap.to(imageRef.current, {
        filter: "blur(0) brightness(1)",
        duration: 0.5,
        left: coverViewportOffset?.left,
        top: coverViewportOffset?.top,
        width: coverViewportOffset?.width,
        height: coverViewportOffset?.height,
      });
      gsap.to(imageRef.current, {
        delay: 0.5,
        position: "initial",
        height: "40vh",
        onComplete: () => {
          if (imageRef.current === null) return;
          imageRef.current.style.width = "100%";
        },
      });
    }
  }, [isShowDetail]);

  return (
    <div className="flex justify-center w-full">
      <h2 className="text-7xl flex-1 uppercase">{item.TITLE}</h2>
      <div className="flex-1">
        <button
          className={classNames("w-full overflow-hidden h-[40vh]", {
            "cursor-default": isShowDetail,
          })}
          ref={buttonRef}
        >
          <Image
            className="object-cover object-center w-full h-[40vh] blur-0 brightness-100"
            src={item.BG_IMAGE}
            alt={item.TITLE}
            placeholder="blur"
            onClick={onShowDetail}
            ref={imageRef}
          />
        </button>
      </div>
    </div>
  );
};

export default PortfolioTitleImage;

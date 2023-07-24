import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import gsap from "gsap";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";

interface PortfolioBackImageProps {
  item: (typeof PORTFOLIO.DATA)[number];
  isShowDetail: boolean;
}

const PortfolioBackImage: FC<PortfolioBackImageProps> = ({
  item,
  isShowDetail,
}) => {
  const wapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isShowDetail) {
        const coverViewportOffset = wapperRef.current?.getBoundingClientRect();

        gsap.to(wapperRef.current, {
          opacity: 0,
          duration: 0.5,
        });

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
          height: window.innerHeight / 2.5,
          onComplete: () => {
            if (imageRef.current === null) return;
            imageRef.current.style.width = "100%";
            imageRef.current.style.filter = "blur(0) brightness(1)";
          },
        });
      } else {
        if (imageRef.current === null) return;

        const viewportOffset = imageRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        gsap.to(wapperRef.current, {
          opacity: 1,
          duration: 0.5,
        });

        gsap.context(() => {
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
            width: windowWidth,
            height: windowHeight,
            ease: "sine",
            duration: 0.7,
            onComplete: () => {
              if (imageRef.current === null) return;
              imageRef.current.style.width = "100%";
              imageRef.current.style.height = "100%";
            },
          });

          tl.to(imageRef.current, {
            filter: "blur(20px) brightness(0.5)",
            duration: 1,
          });
        });
      }
    }, imageRef);

    return () => ctx.revert();
  }, [isShowDetail]);

  return (
    <div
      ref={wapperRef}
      className="absolute right-12 left-[calc(50%)] top-[calc(33%)] bottom-[calc(33%)] overflow-hidden opacity-0 z-20 cursor-pointer pointer-events-none"
    >
      <Image
        className="object-cover object-center w-full blur-0 brightness-100"
        src={item.BG_IMAGE}
        alt={item.TITLE}
        placeholder="blur"
        ref={imageRef}
      />
    </div>
  );
};

export default PortfolioBackImage;

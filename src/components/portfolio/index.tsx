"use client";

import { PORTFOLIO } from "@/src/constants/portfolio/portfolio.ko";
import { PortfolioTitleImage } from "@/src/components/portfolio/TitleImage";
import { useEffect, useRef, useState } from "react";
import { PorfolioDetail } from "./Detail";
import { PortfolioNavbar } from "@/src/components/portfolio/Navbar";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";
import { PortfolioBackImage } from "./BackImage";
import { HambergerMenu } from "../common/Hamberger";
import { cn } from "@/src/functions/util";
import Image from "next/image";
import LeftArrow from "@/public/icons/left-arrow.svg";

const { DATA } = PORTFOLIO;

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const titleSwiperRef = useRef<SwiperRef>(null);
  const imageSwiperRef = useRef<SwiperRef>(null);

  const showDetail = (index = 0) => {
    if (titleSwiperRef.current === null) return;
    setIsShowDetail(true);
    titleSwiperRef.current.swiper.slideTo(index);
    setSelectedProject(index);
  };

  const closeDetail = () => {
    setIsShowDetail(false);
  };

  useEffect(() => {
    scrollTo(0, topRef.current?.offsetTop || 0);

    if (imageSwiperRef.current === null || titleSwiperRef.current === null)
      return;
    imageSwiperRef.current.swiper.controller.control =
      titleSwiperRef.current.swiper;
    titleSwiperRef.current.swiper.controller.control =
      imageSwiperRef.current.swiper;
  }, []);

  return (
    <>
      <div ref={topRef} />
      <HambergerMenu isWhite={isShowDetail} />
      {isShowDetail && (
        <button
          onClick={closeDetail}
          className="fixed left-14 top-32 z-50 h-fit w-fit"
        >
          <Image src={LeftArrow} alt="arrow-left" />
        </button>
      )}
      <PortfolioNavbar />
      <div className="absolute left-1/2 top-1/2 flex h-screen max-w-[1920px] translate-x-[-50%] translate-y-[-50%] justify-between px-12 ">
        <Swiper
          className="h-screen flex-1"
          modules={[Mousewheel, FreeMode, Controller]}
          direction="vertical"
          slidesPerView="auto"
          centeredSlides={true}
          freeMode={{ enabled: true, sticky: true }}
          mousewheel={{
            releaseOnEdges: true,
            thresholdTime: 100,
            thresholdDelta: 10,
          }}
          ref={titleSwiperRef}
        >
          {DATA.map((item, index) => (
            <SwiperSlide key={index} style={{ height: "fit-content" }}>
              {({ isActive }) => (
                <button
                  onClick={() => showDetail(index)}
                  className={cn("text-7xl uppercase", {
                    "text-gray-400": !isActive,
                  })}
                >
                  <h2>{item.TITLE}</h2>
                </button>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="h-full max-2xl:!hidden"
          modules={[Mousewheel, FreeMode, Controller]}
          direction="vertical"
          centeredSlides={true}
          freeMode={{ enabled: true, sticky: true }}
          mousewheel={{
            releaseOnEdges: true,
          }}
          slidesPerView={3}
          spaceBetween={20}
          ref={imageSwiperRef}
        >
          {DATA.map((item, index) => (
            <SwiperSlide key={index} className="w-[40rem] overflow-hidden">
              <PortfolioTitleImage
                item={item}
                key={index}
                onShowDetail={() => showDetail(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pointer-events-none fixed bottom-0 z-10 w-full bg-gradient-to-t from-white py-32"></div>
      <PortfolioBackImage
        isShowDetail={isShowDetail}
        item={DATA[selectedProject]}
      />
      <PorfolioDetail
        item={DATA[selectedProject]}
        isShowDetail={isShowDetail}
      />
    </>
  );
};

"use client";

import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";
import PortfolioTitleImage from "@/src/components/portfolio/PortfolioTitleImage.component";
import { useEffect, useRef, useState } from "react";
import PorfolioDetail from "./PortfolioDetail.component";
import classNames from "classnames";
import PortfolioNavbar from "@/src/components/portfolio/PortfolioNavbar.component";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";
import PortfolioBackImage from "./PortfolioBackImage.component";
import HambergerMenu from "../common/Hamberger.component";

const { DATA } = PORTFOLIO;

const Portfolio = () => {
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
      <HambergerMenu isWhite={!isShowDetail} />
      {isShowDetail && (
        <button
          onClick={closeDetail}
          className="fixed w-fit h-fit z-50 left-14 top-32"
        >
          <img src="/icons/left-arrow.svg" alt="arrow-left" />
        </button>
      )}
      <PortfolioNavbar />
      <div className="absolute h-screen flex px-12 max-w-[1920px] justify-between translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 ">
        <Swiper
          className="flex-1 h-screen"
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
                  className={classNames("text-7xl uppercase", {
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
          className="h-full max-lg:!hidden"
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
            <SwiperSlide key={index} className="overflow-hidden w-[40rem]">
              <PortfolioTitleImage
                item={item}
                key={index}
                onShowDetail={() => showDetail(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="fixed bottom-0 w-full bg-gradient-to-t from-white z-10 py-32 pointer-events-none"></div>
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

export default Portfolio;

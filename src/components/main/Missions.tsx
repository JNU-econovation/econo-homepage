"use client";

import { ECONOVATION, MISSION } from "@/src/constants/main.ko";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FC, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { InfinityAutoScroll } from "../common/InfinityAutoScroll";
import { cn } from "@/src/functions/util";
import { Icon } from "../common/Icon";

interface MissionContentProps {
  mission: (typeof MISSION)[0];
  index: number;
  selectedMission: number;
  isMobile?: boolean;
}

const MissionContent: FC<MissionContentProps> = ({
  mission,
  index,
  selectedMission,
  isMobile = false,
}) => {
  const swiper = useSwiper();
  return (
    <button
      key={mission.TITLE}
      onClick={() => {
        if (isMobile) return;
        swiper.slideToLoop(index);
      }}
      className={cn(
        "h-fit w-full pt-4 text-left",
        selectedMission === index || isMobile ? "text-black" : "text-[#9C9C9C]"
      )}
    >
      <span className="text-xl">{`0${index + 1}`}</span>
      <div
        className={cn(
          !isMobile && "border-t-2",
          selectedMission === index ? "border-black" : "border-[#9C9C9C]"
        )}
      ></div>
      <div className="text-4xl font-semibold">{mission.TITLE}</div>
      <div className="my-3 text-lg font-medium">{mission.SUBTITLE}</div>
      <div
        className={cn(
          "my-8 flex flex-col gap-1",
          selectedMission === index || isMobile
            ? "text-[#292929]"
            : "text-[#9C9C9C]"
        )}
      >
        {mission.CONTENT.split("\n").map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </button>
  );
};

const MissionDesktop = () => {
  const [selectedMission, setSelectedMission] = useState(0);

  return (
    <>
      <div className="py-96">
        <div className="absolute left-0 w-full -translate-y-28">
          <InfinityAutoScroll multiple={10}>
            <div className="text-7xl uppercase">{ECONOVATION}</div>
            <div className="mx-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#0038FF] p-4">
              <Icon icon="right-up-direction" />
            </div>
          </InfinityAutoScroll>
        </div>
      </div>
      <Swiper
        className="mb-96"
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(e) => setSelectedMission(e.realIndex)}
        modules={[Autoplay, EffectFade]}
      >
        {MISSION.map((mission) => (
          <SwiperSlide key={mission.TITLE}>
            <Image
              className="w-full"
              placeholder="blur"
              src={mission.IMAGE}
              alt={mission.TITLE}
            />
          </SwiperSlide>
        ))}
        <div className="flex w-full justify-between text-left">
          {MISSION.map((mission, index) => (
            <MissionContent
              key={mission.TITLE}
              mission={mission}
              index={index}
              selectedMission={selectedMission}
            />
          ))}
        </div>
      </Swiper>
    </>
  );
};

export const MissionMobile = () => {
  return (
    <>
      <div className="mt-24 flex w-full flex-col text-left">
        {MISSION.map((mission, index) => (
          <MissionContent
            key={mission.TITLE}
            mission={mission}
            index={index}
            selectedMission={0}
            isMobile={true}
          />
        ))}
      </div>
      <div className="pt-52">
        <div className="absolute left-0 w-full -translate-y-28">
          <InfinityAutoScroll multiple={10}>
            <div className="text-4xl uppercase">{ECONOVATION}</div>
            <div className="mx-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#0038FF]">
              <Icon icon="right-up-direction" className="h-4 w-4" />
            </div>
          </InfinityAutoScroll>
        </div>
      </div>
    </>
  );
};

export const Missions = () => {
  return (
    <>
      <div className="max-lg:hidden">
        <MissionDesktop />
      </div>
      <div className="lg:hidden">
        <MissionMobile />
      </div>
    </>
  );
};

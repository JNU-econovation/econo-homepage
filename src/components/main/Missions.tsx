"use client";

import { ECONOVATION, MISSION } from "@/src/constants/main.ko";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FC, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { isMobile } from "react-device-detect";
import { InfinityAutoScroll } from "../common/InfinityAutoScroll";
import { cn } from "@/src/functions/util";

interface MissionContentProps {
  mission: (typeof MISSION)[0];
  index: number;
  selectedMission: number;
}

const MissionContent: FC<MissionContentProps> = ({
  mission,
  index,
  selectedMission,
}) => {
  const swiper = useSwiper();
  return (
    <button
      key={mission.TITLE}
      onClick={() => {
        swiper.slideTo(index);
      }}
      className={cn(
        "w-full pt-4 text-left",
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
      <div className="text-lg font-medium my-3">{mission.SUBTITLE}</div>
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

export const Missions = () => {
  const [selectedMission, setSelectedMission] = useState(0);

  return !isMobile ? (
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
      <div className="flex justify-between text-left w-full">
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
  ) : (
    <>
      <div>
        <div className="flex flex-col text-left w-full">
          {MISSION.map((mission, index) => (
            <MissionContent
              key={mission.TITLE}
              mission={mission}
              index={index}
              selectedMission={selectedMission}
            />
          ))}
        </div>
      </div>
      {
        <div className="pt-52 pb-24">
          <div className="absolute left-0 w-full -translate-y-28">
            <InfinityAutoScroll multiple={10}>
              <div className="text-5xl uppercase">{ECONOVATION}</div>
              <div className="flex justify-center items-center w-10 h-10 bg-[#0038FF] mx-8 rounded-full">
                <Image
                  src={require("/public/icons/right-up-direction.svg").default}
                  alt="right-up-direction"
                  width={16}
                  height={16}
                />
              </div>
            </InfinityAutoScroll>
          </div>
        </div>
      }
    </>
  );
};

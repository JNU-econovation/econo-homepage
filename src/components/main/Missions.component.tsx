"use client";

import { MISSION } from "@/src/constants/main.ko";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FC, useState } from "react";
import classNames from "classnames";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

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
      className={classNames(
        "w-full pt-4 text-left",
        selectedMission === index ? "text-black" : "text-[#9C9C9C]"
      )}
    >
      <span className="text-xl">{`0${index + 1}`}</span>
      <div
        className={classNames(
          "border-t-2",
          selectedMission === index ? "border-black" : "border-[#9C9C9C]"
        )}
      ></div>
      <div className="text-4xl font-semibold">{mission.TITLE}</div>
      <div className="text-lg font-medium my-3">{mission.SUBTITLE}</div>
      <div
        className={classNames(
          "my-8 flex flex-col gap-1",
          selectedMission === index ? "text-[#292929]" : "text-[#9C9C9C]"
        )}
      >
        {mission.CONTENT.split("\n").map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </button>
  );
};

const Missions = () => {
  const [selectedMission, setSelectedMission] = useState(0);

  return (
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
  );
};

export default Missions;

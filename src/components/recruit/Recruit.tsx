import strings from "@/assets/strings/recruit.ko.json";
import Fileds from "@/components/recruit/Fields";
import Faq from "@/components/recruit/Faq";
import Subscription from "@/components/recruit/Subscription";
import { useLayoutEffect, useRef } from "react";

import Wating from "./Waiting";
import RecruitMain from "./RecruitMain";

const data = strings;
const Recruit = () => {
  const recruitRef = useRef<HTMLDivElement>(null);
  const scrollToRecruit = () =>
    window.scrollTo({
      top: recruitRef.current?.offsetTop,
      behavior: "smooth",
    });

  useLayoutEffect(() => {
    const html = document.querySelector("html") as HTMLElement;
    const changeFontSize = () => {
      const baseFontSize = window.screen.width >= 1300 ? "100%" : "62.5%";
      html.style.fontSize = baseFontSize;
    };

    window.addEventListener("resize", changeFontSize);
    return () => {
      window.removeEventListener("resize", changeFontSize);
    };
  });

  return (
    <div className="flex-col justify-center w-full px-24 overflow-y-hidden">
      {!data.isOn && (
        <section>
          <Wating scrollToRecruit={scrollToRecruit} />
        </section>
      )}
      <section ref={recruitRef}>
        <RecruitMain />
      </section>
      <section>
        <Fileds />
      </section>
      <section>
        <Subscription />
      </section>
      <section>
        <Faq />
      </section>
    </div>
  );
};

export default Recruit;

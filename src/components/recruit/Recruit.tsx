import strings from "@/assets/strings/recruit.ko.json";
import Fileds from "@/components/recruit/Fields";
import Faq from "@/components/recruit/Faq";
import Subscription from "@/components/recruit/Subscription";
import { useInsertionEffect, useRef } from "react";

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

  useInsertionEffect(() => {
    const html = document.querySelector("html") as HTMLElement;
    const changeFontSize = () =>
      (html.style.fontSize = window.innerWidth >= 1300 ? "100%" : "62.5%");
    window.addEventListener("resize", changeFontSize);

    return () => {
      window.removeEventListener("resize", changeFontSize);
    };
  }, []);

  return (
    <>
      <div className="px-24">
        {!data.isOn && (
          <section>
            <Wating scrollToRecruit={scrollToRecruit} />
          </section>
        )}
        <div ref={recruitRef}>
          <section>
            <RecruitMain />
          </section>
        </div>
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
    </>
  );
};

export default Recruit;

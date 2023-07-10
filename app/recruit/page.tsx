"use client";

import { RECRUIT } from "@/src/assets/constants/recruit.ko";
import Faq from "@/src/components/recruit/Faq.component";
import Fileds from "@/src/components/recruit/Fields.component";
import RecruitMain from "@/src/components/recruit/RecruitMain.component";
import Subscription from "@/src/components/recruit/Subscription.component";
import Wating from "@/src/components/recruit/Waiting.component";
import { useInsertionEffect, useRef, useState } from "react";

const Recruit = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
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
        {!RECRUIT.IS_ON && (
          <section>
            <Wating
              inputValue={emailInputValue}
              inputOnChange={(e) => setEmailInputValue(e.target.value)}
              scrollToRecruit={scrollToRecruit}
            />
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

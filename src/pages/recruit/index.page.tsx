import Footer from "@/components/common/Footer.component";
import { useState } from "react";
import strings from "@/assets/strings/recruit.ko.json";
import Fileds from "@/components/recruit/Fields.component";
import Faq from "@/components/recruit/Faq.component";
import Subscription from "@/components/recruit/Subscription.component";
import { useInsertionEffect, useRef } from "react";
import Wating from "@/components/recruit/Waiting.component";
import RecruitMain from "@/components/recruit/RecruitMain.component";

const data = strings;

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
        {!data.isOn && (
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
      <Footer />
    </>
  );
};

export default Recruit;

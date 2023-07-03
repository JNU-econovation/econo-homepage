import strings from "@/assets/strings/recruit.ko.json";
import Fileds from "@/components/recruit/Fields.component";
import Faq from "@/components/recruit/Faq.component";
import Subscription from "@/components/recruit/Subscription.component";
import { FC, useInsertionEffect, useRef } from "react";

import Wating from "./Waiting.component";
import RecruitMain from "./RecruitMain.component";

const data = strings;
interface RecruitProps {
  emailInputValue: string;
  emailInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Recruit: FC<RecruitProps> = ({ emailInputValue, emailInputOnChange }) => {
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
              inputOnChange={emailInputOnChange}
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

import strings from "@/assets/strings/recruit.ko.json";
import Fileds from "@/components/recruit/Fields";
import Faq from "@/components/recruit/Faq";
import Subscription from "@/components/recruit/Subscription";
import { useLayoutEffect } from "react";

const data = strings;
const Recruit = () => {
  useLayoutEffect(() => {
    const html = document.querySelector("html") as HTMLElement;

    const changeFontSize = () => {
      const baseFontSize = window.screen.width >= 1440 ? "100%" : "62.5%";
      html.style.fontSize = baseFontSize;
    };

    window.addEventListener("resize", changeFontSize);
    return () => {
      window.removeEventListener("resize", changeFontSize);
    };
  });

  return (
    <div className="flex-col justify-center w-full px-16">
      <section className="text-xl leading-relaxed text-center my-20">
        <h1 className="text-[7rem] uppercase font-bold text-center my-20">
          {data.title}
        </h1>
        {data.content.split("\n").map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </section>
      <section className="w-full grid grid-cols-[repeat(4,minmax(16rem,_1fr))] my-64 gap-16">
        {data.schedule.map((d, i) => (
          <div className="w-full" key={i}>
            <div className="text-6xl mb-6">{d.date}</div>
            <div className="border-t-[0.5px] w-full border-black relative after:border-t-[1px] after:border-r-[1px] after:rotate-45 after:right-[1px] after:-bottom-[6px] after:h-[12px] after:w-[12px] after:absolute after:border-black"></div>
            <div className="text-lg mt-4">{d.text}</div>
          </div>
        ))}
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

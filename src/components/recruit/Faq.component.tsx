import * as FAQ from "@/assets/constants/faq.ko.json";
import { gsap } from "gsap";
import { useState } from "react";

const Faq = () => {
  const [faqBoard, setFaqBoard] = useState(0);
  const [faqOpenPosition, setFaqOpenPosition] = useState(-1);

  const faqOpen = (position: number) => {
    gsap.context(() => {
      gsap.to(`.faq-content-${position}`, {
        color: "#fff",
        zIndex: 10,
      });
      gsap.to(`.faq-backgorund-${position}`, {
        width: "190%",
        zIndex: 5,
      });
      gsap.to(`.faq-subcontent-${position}`, {
        autoAlpha: 1,
        zIndex: 10,
      });
    });
  };

  const faqClose = (position: number) => {
    gsap.context(() => {
      gsap.to(`.faq-content-${position}`, {
        color: "#000",
        zIndex: 0,
      });
      gsap.to(`.faq-backgorund-${position}`, {
        width: "0%",
        zIndex: 0,
      });
      gsap.to(`.faq-subcontent-${position}`, {
        color: "#fff",
        autoAlpha: 0,
        zIndex: -10,
      });
    });
  };

  const faqToggle = (position: number) => {
    FAQ[faqBoard].DATA.map((_, i) => {
      if (i !== position) faqClose(i);
      else faqOpen(i);
    });
    if (faqOpenPosition === position) {
      faqClose(position);
      setFaqOpenPosition(-1);
      return;
    }
    setFaqOpenPosition(position);
  };

  return (
    <>
      <div className="flex justify-between my-8">
        <h1>FAQ</h1>
        <div className="flex gap-10 text-2xl">
          {FAQ.map((d, i) => (
            <button
              className={faqBoard === i ? "" : "text-[#AFAFAF]"}
              key={i}
              onClick={() => {
                setFaqBoard(i);
                faqToggle(-1);
              }}
            >
              {d.TITLE}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2">
        {FAQ[faqBoard].DATA.map((d, i) => (
          <div
            className="py-14 text-2xl border-b border-black odd:border-r first:border-t [&:nth-child(2)]:border-t relative"
            key={i}
          >
            <input
              type="radio"
              name="faq"
              id={`faq-${i}`}
              value={faqOpenPosition}
              className="hidden"
              onClick={() => faqToggle(i)}
            />
            <label htmlFor={`faq-${i}`}>
              <div
                className={`faq-content-${i} absolute top-2 left-4 text-2xl`}
              >
                {`${i + 1}`.padStart(2, "0")}
              </div>
              <div
                className={`faq-content-${i} absolute top-[50%] -translate-y-4 left-0 text-center w-[100%] h-[100%]`}
              >
                {d.Q}
              </div>
              <div
                className={
                  `faq-backgorund-${i} absolute top-0 bg-black h-[calc(3px+100%)] translate-y-[-1px] ` +
                  (i % 2 === 0 ? "left-0" : "right-0")
                }
              ></div>
              <div
                className={
                  `faq-content-${i} faq-subcontent-${i} absolute text-transparent top-[50%] w-[90%] translate-y-[-50%] text-center text-lg -z-10 text-white ` +
                  (i % 2 === 0 ? "left-[90%]" : "right-[90%]")
                }
              >
                {d.A.split("\n").map((ad, ai) => (
                  <div key={ai}>{ad}</div>
                ))}
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;

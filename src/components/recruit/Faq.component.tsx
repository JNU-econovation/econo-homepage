import { FAQ } from "@/src/assets/constants/faq.ko";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";

const Faq = () => {
  const [faqBoard, setFaqBoard] = useState(0);
  const [faqOpenPosition, setFaqOpenPosition] = useState(-1);

  const faqOpen = (index: number) => {
    gsap.to(`#faq-${index}`, {
      height: "auto",
      duration: 0.5,
    });
  };

  const faqClose = (index: number) => {
    gsap.to(`#faq-${index}`, {
      height: "0",
      duration: 0.5,
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
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-12 text-xl flex-1 items-start">
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
        <div className="grid grid-cols-2 gap-12 flex-[2_0_0%] -translate-y-8">
          {FAQ[faqBoard].DATA.map((data, index) => (
            <div className="w-full border-b" key={index}>
              <button
                className="flex items-center py-8 w-full relative group [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-in-out"
                onClick={() => faqToggle(index)}
              >
                <div className="text-base font-semibold group-hover:translate-x-4">
                  {`${index + 1}`.padStart(2, "0")}
                </div>
                <div className="ml-6 text-lg group-hover:translate-x-4 delay-100">
                  {data.Q}
                </div>
                <Image
                  className="w-4 h-4 absolute right-0 group-hover:-translate-x-4"
                  src={require("/public/icons/multiply.svg").default}
                  alt="see more"
                />
              </button>
              <div className="ml-3 overflow-hidden h-0" id={`faq-${index}`}>
                <div className="p-8">{data.A}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;

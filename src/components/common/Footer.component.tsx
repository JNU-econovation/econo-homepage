"use client";

import { FOOTER } from "@/src/constants/common.ko";
import LinkTo from "./LinkTo.component";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="w-full mt-52 uppercase">
      <div className="flex w-full px-16 border-b border-black">
        <div className="flex flex-col justify-between flex-[3_1_0%] border-r border-black h-[40rem]">
          <h1 className="text-6xl">{FOOTER.TITLE}</h1>
          <div className="text-2xl">
            {FOOTER.CONTACT.map((d, i) => (
              <LinkTo
                link={d.LINK}
                key={i}
                className="flex align-baseline my-4"
              >
                <img
                  src="/icons/right-arrow-circle.svg"
                  alt="rightArrow"
                  className="inline mr-4 h-8 w-8"
                />
                <span>{d.NAME}</span>
              </LinkTo>
            ))}
          </div>
          <div className="my-12">
            <div className="uppercase">{FOOTER.ADDRESS.EN}</div>
            <div>{FOOTER.ADDRESS.KO}</div>
          </div>
        </div>
        <div className="flex flex-col justify-end flex-1 text-base gap-4 m-10">
          {FOOTER.SOCIAL.map((d, i) => (
            <LinkTo link={d.LINK} key={i}>
              <span>{d.NAME}</span>
            </LinkTo>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-around">
        {FOOTER.SPONSOR.map((sponser) => (
          <Link
            key={sponser.ALT}
            className="p-12"
            href={sponser.HREF}
            target="_blank"
          >
            <Image alt={sponser.ALT} src={sponser.IMAGE} />
          </Link>
        ))}
      </div>
      <button
        onClick={backToTop}
        className="flex justify-center items-center h-[10rem] bg-black text-white text-xl w-full cursor-pointer uppercase"
      >
        {FOOTER.TO_TOP}
      </button>
    </footer>
  );
};

export default Footer;

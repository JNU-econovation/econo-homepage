"use client";

import { FOOTER } from "@/src/constants/common.ko";
import { LinkTo } from "./LinkTo";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

const FooterDesktop = () => {
  return (
    <>
      <div className="flex w-full border-b border-black px-16">
        <div className="flex h-[40rem] flex-[3_1_0%] flex-col justify-between border-r border-black">
          <h1 className="text-6xl">{FOOTER.TITLE}</h1>
          <div className="text-2xl">
            {FOOTER.CONTACT.map((d, i) => (
              <LinkTo
                link={d.LINK}
                key={i}
                className="my-4 flex align-baseline"
                target="_blank"
              >
                <Icon
                  icon="right-arrow-circle"
                  className="mr-4 inline h-8 w-8"
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
        <div className="m-10 flex flex-1 flex-col justify-end gap-4 text-base">
          {FOOTER.SOCIAL.map((d, i) => (
            <LinkTo target="_blank" link={d.LINK} key={i}>
              <span>{d.NAME}</span>
            </LinkTo>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-around">
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
    </>
  );
};

const FooterMobile = () => {
  return (
    <>
      <div className="w-full px-4">
        <h1 className="pb-12 text-3xl">{FOOTER.TITLE}</h1>
        <div className="text-2xl">
          {FOOTER.CONTACT.map((d, i) => (
            <LinkTo
              link={d.LINK}
              key={i}
              className="my-4 flex align-baseline"
              target="_blank"
            >
              <Icon icon="right-arrow-circle" className="mr-4 inline h-8 w-8" />
              <span>{d.NAME}</span>
            </LinkTo>
          ))}
        </div>
        <div className="my-12">
          <div className="uppercase">{FOOTER.ADDRESS.EN}</div>
          <div>{FOOTER.ADDRESS.KO}</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-4">
        {FOOTER.SPONSOR.map((sponser) => (
          <Link
            key={sponser.ALT}
            href={sponser.HREF}
            className="p-4"
            target="_blank"
          >
            <Image alt={sponser.ALT} src={sponser.IMAGE} />
          </Link>
        ))}
      </div>
    </>
  );
};

export const Footer = () => {
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="mt-32 w-full uppercase">
      <div className="max-md:hidden">
        <FooterDesktop />
      </div>
      <div className="md:hidden">
        <FooterMobile />
      </div>
      <button
        onClick={backToTop}
        className="flex h-[10rem] w-full cursor-pointer items-center justify-center bg-black text-xl uppercase text-white"
      >
        {FOOTER.TO_TOP}
      </button>
    </footer>
  );
};

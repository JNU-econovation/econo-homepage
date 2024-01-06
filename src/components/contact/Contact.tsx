"use client";

import { CONTACT } from "@/src/constants/contact.ko";
import { FOOTER } from "@/src/constants/common.ko";
import { HambergerMenu } from "../common/Hamberger";
import { ContactAsk } from "./Ask";

const { ADDRESS } = FOOTER;

export const Contact = () => {
  return (
    <>
      <HambergerMenu />
      <h1 className="mt-52 flex w-full justify-center text-9xl font-semibold uppercase max-sm:mt-12 max-sm:text-5xl">
        {CONTACT.TITLE}
      </h1>
      <h2 className="my-8 flex w-full justify-center text-2xl max-sm:hidden">
        {CONTACT.SUBTITLE}
      </h2>
      <div className="m-auto w-[calc(100%-7rem)] max-sm:mt-12 max-sm:w-[calc(100%-3rem)]">
        <iframe
          width="100%"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.2082658959175!2d126.90183117728368!3d35.17636137275428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718c50dd50d377%3A0xa48eedc5c684ca9!2z7KCE64Ko64yA7ZWZ6rWQ7KCV67O07KCE7IKw7JuQ!5e0!3m2!1sen!2skr!4v1689576881326!5m2!1sen!2skr&style=feature:road|element:geometry|color:0x0038FF"
          loading="lazy"
        ></iframe>
      </div>
      <div className="mx-12 my-8 flex justify-center text-xl uppercase max-lg:flex-col">
        <span>{ADDRESS.EN}</span>
        <span>{ADDRESS.KO}</span>
      </div>
      <ContactAsk />
    </>
  );
};

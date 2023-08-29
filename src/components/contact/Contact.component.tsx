"use client";

import { CONTACT } from "@/src/constants/contact.ko";
import { FOOTER } from "@/src/constants/common.ko";
import { useRef } from "react";
import HambergerMenu from "../common/Hamberger.component";
import ContactAsk from "./Ask.component";

const { ADDRESS } = FOOTER;
const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HambergerMenu />
      <h1 className="w-full flex justify-center mt-52 font-semibold text-9xl uppercase">
        {CONTACT.TITLE}
      </h1>
      <h2 className="w-full flex justify-center my-8 text-2xl">
        {CONTACT.SUBTITLE}
      </h2>
      <div className="w-[calc(100%-7rem)] m-auto">
        <iframe
          width="100%"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.2082658959175!2d126.90183117728368!3d35.17636137275428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718c50dd50d377%3A0xa48eedc5c684ca9!2z7KCE64Ko64yA7ZWZ6rWQ7KCV67O07KCE7IKw7JuQ!5e0!3m2!1sen!2skr!4v1689576881326!5m2!1sen!2skr&style=feature:road|element:geometry|color:0x0038FF"
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-full flex justify-center my-8 text-xl uppercase">
        {`${ADDRESS.EN} ${ADDRESS.KO}}`}
      </div>
      <ContactAsk />
    </>
  );
};

export default Contact;

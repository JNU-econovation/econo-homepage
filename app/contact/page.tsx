"use client";

import { Loading } from "@/src/components/common/Loading";
import { Contact } from "@/src/components/contact/Contact";
import { loadingState } from "@/src/stores/common";
import { useAtom } from "jotai";
import { useEffect } from "react";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useAtom(loadingState);
  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Contact />
    </>
  );
};

export default ContactPage;

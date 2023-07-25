"use client";

import Loading from "@/src/components/common/Loading.component";
import Hackathon from "@/src/components/portfolio/Hackathon/Hackathon.component";
import { useEffect } from "react";
import { loadingState } from "@/src/stores/common";
import { useAtom } from "jotai";

const HackathonPage = () => {
  const [isLoading, setIsLoading] = useAtom(loadingState);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Hackathon />
    </>
  );
};

export default HackathonPage;

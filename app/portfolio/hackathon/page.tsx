"use client";

import { Loading } from "@/src/components/common/Loading";
import { Hackathon } from "@/src/components/portfolio/Hackathon/Hackathon";
import { useEffect } from "react";
import { loadingState } from "@/src/stores/common";
import { useAtom } from "jotai";

const HackathonPage = () => {
  const [isLoading, setIsLoading] = useAtom(loadingState);
  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Hackathon />
    </>
  );
};

export default HackathonPage;

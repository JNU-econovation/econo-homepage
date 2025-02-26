import { useEffect, useState } from "react";

import { RECRUIT, type RecruitStatus } from "../constants/recruit/recruit.ko";

const getRecruitStatus = () => {
  const recruitStartDate = new Date(RECRUIT.START_DATE);
  const recruitEndDate = new Date(RECRUIT.END_DATE);

  const now = Date.now();
  if (now < recruitStartDate.getTime()) {
    return "READY";
  } else if (now <= recruitEndDate.getTime()) {
    return "OPEN";
  } else {
    return "CLOSED";
  }
};

const useRecruitStatus = () => {
  const [recruitStatus, setRecruitStatus] =
    useState<RecruitStatus>(getRecruitStatus());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRecruitStatus(getRecruitStatus());
    }, 0);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { recruitStatus };
};

export default useRecruitStatus;

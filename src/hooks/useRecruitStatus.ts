import { useEffect, useState } from "react";

import { RECRUIT, type RecruitStatus } from "../constants/recruit/recruit.ko";

const useRecruitStatus = () => {
  const [recruitStatus, setRecruitStatus] = useState<RecruitStatus>("CLOSED");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const recruitStartDate = new Date(RECRUIT.START_DATE);
      const recruitEndDate = new Date(RECRUIT.END_DATE);

      const now = Date.now();
      if (
        recruitStartDate.getTime() - now > 0 &&
        recruitEndDate.getTime() - now > 0
      ) {
        setRecruitStatus("READY");
      } else if (
        recruitStartDate.getTime() - now <= 0 &&
        recruitEndDate.getTime() - now > 0
      ) {
        setRecruitStatus("OPEN");
      } else {
        setRecruitStatus("CLOSED");
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { recruitStatus };
};

export default useRecruitStatus;

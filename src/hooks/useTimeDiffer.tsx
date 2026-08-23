"use client";

import { useEffect, useState } from "react";
import { getTimeDiff } from "../functions/util";

const INITIAL_TIME = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const useTimeDiffer = (date: Date) => {
  const [time, setTime] = useState(INITIAL_TIME);
  const targetTime = date.getTime();

  useEffect(() => {
    const updateTime = () => setTime(getTimeDiff(new Date(targetTime)));

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return { ...time };
};

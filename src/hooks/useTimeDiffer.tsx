"use client";

import { useEffect, useState } from "react";
import { getTimeDiff } from "../functions/util";

export const useTimeDiffer = (date: Date) => {
  const [time, setTime] = useState(getTimeDiff(date));

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeDiff(date)), 1000);
    return () => clearInterval(timer);
  }, [date]);

  return { ...time };
};

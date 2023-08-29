import { useEffect, useState } from "react";
import { timeDiff } from "../functions/util";

const useTimeDiffer = (date: Date) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinuts] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const { days, hours, minutes, seconds } = timeDiff(date, new Date());
      setDays(days);
      setHours(hours);
      setMinuts(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return { days, hours, minutes, seconds };
};

export default useTimeDiffer;

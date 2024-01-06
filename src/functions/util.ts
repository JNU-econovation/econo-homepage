import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const getNumberWithOrdinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const timeDiff = (date1: Date, date2: Date) => {
  const { abs, floor } = Math;
  const diff = (date1.getTime() - date2.getTime()) / 1000;
  const days = abs(floor(diff / 86400));
  const hours = abs(floor(diff / 3600) % 24);
  const minutes = abs(floor((diff - hours * 3600) / 60) % 60);
  const seconds = abs(floor(diff - hours * 3600 - minutes * 60) % 60);
  return { days, hours, minutes, seconds };
};

export const isEmail = (email: string): boolean => {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

import { cn } from "@/src/functions/util";
import { FC, PropsWithChildren } from "react";

interface InfinityAutoScrollProps {
  className?: string;
  multiple?: number;
  reverse?: boolean;
}

export const InfinityAutoScroll: FC<
  PropsWithChildren<InfinityAutoScrollProps>
> = ({ children, className, multiple = 2, reverse = false }) => {
  return (
    <div className={cn("flex w-full truncate", className)}>
      {Array.from({ length: multiple }).map((_, i) => (
        <div
          className={cn(
            "flex w-fit items-center",
            reverse ? "-animate-infinity-scroll" : "animate-infinity-scroll"
          )}
          key={i}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

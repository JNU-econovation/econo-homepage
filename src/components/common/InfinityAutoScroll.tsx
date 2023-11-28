import { cn } from "@/src/functions/util";
import { FC, PropsWithChildren } from "react";

interface InfinityAutoScrollProps {
  className?: string;
  multiple?: number;
}

export const InfinityAutoScroll: FC<
  PropsWithChildren<InfinityAutoScrollProps>
> = ({ children, className, multiple = 2 }) => {
  return (
    <div className={cn("flex w-full truncate", className)}>
      {Array.from({ length: multiple }).map((_, i) => (
        <div
          className="flex items-center w-fit animate-infinity-scroll"
          key={i}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

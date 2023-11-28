import { cn } from "@/src/functions/util";
import { FC, PropsWithChildren } from "react";

interface InfinityAutoScrollProps {
  className?: string;
  multiple?: number;
}

const InfinityAutoScroll: FC<PropsWithChildren<InfinityAutoScrollProps>> = ({
  children,
  className,
  multiple = 2,
}) => {
  return (
    <div className={cn("flex w-full truncate text-clip", className)}>
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

export default InfinityAutoScroll;

import classNames from "classnames";
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
    <div className={classNames("flex w-full truncate text-clip", className)}>
      {Array.from({ length: multiple }).map(() => (
        <div className="flex items-center w-fit animate-infinity-scroll">
          {children}
        </div>
      ))}
    </div>
  );
};

export default InfinityAutoScroll;

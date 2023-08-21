"use client";

import { URLS } from "@/src/constants/url.ko";
import { loadingState } from "@/src/stores/common";
import classNames from "classnames";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { FC, ReactElement } from "react";
import debounce from "lodash/debounce";
import Link from "next/link";

interface LinkToProps {
  link: string;
  className?: string;
  children: ReactElement[] | ReactElement | string[] | string;
  onClick?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const LinkTo: FC<LinkToProps> = ({
  link,
  className,
  children,
  onClick,
  target = "_self",
}) => {
  const setIsLoading = useSetAtom(loadingState);
  const router = useRouter();
  const viewLoading = debounce(() => {
    router.push(URLS[link as keyof typeof URLS].LINK);
  }, 600);
  return (
    <Link
      href={URLS[link as keyof typeof URLS].LINK}
      onClick={(e) => {
        e.preventDefault();
        if (target === "_blank") {
          return window.open(URLS[link as keyof typeof URLS].LINK);
        }
        setIsLoading(true);
        onClick && onClick();
        viewLoading();
      }}
      target={target}
      className={classNames(className, "cursor-pointer")}
    >
      {children}
    </Link>
  );
};
export default LinkTo;

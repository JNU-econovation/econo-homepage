"use client";

import { URLS } from "@/src/constants/url.ko";
import { loadingState } from "@/src/stores/common";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { FC, ReactElement } from "react";
import debounce from "lodash/debounce";
import Link from "next/link";
import { cn } from "@/src/functions/util";

interface LinkToProps {
  link: keyof typeof URLS;
  className?: string;
  children: ReactElement[] | ReactElement | string[] | string;
  onClick?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export const LinkTo: FC<LinkToProps> = ({
  link,
  className,
  children,
  onClick,
  target = "_self",
}) => {
  const setIsLoading = useSetAtom(loadingState);
  const router = useRouter();
  const viewLoading = debounce(() => {
    router.push(URLS[link].LINK);
  }, 600);
  return (
    <Link
      href={URLS[link].LINK}
      onClick={() => {
        setIsLoading(true);
        onClick && onClick();
        viewLoading();
      }}
      target={target}
      className={cn(className, "cursor-pointer")}
    >
      {children}
    </Link>
  );
};

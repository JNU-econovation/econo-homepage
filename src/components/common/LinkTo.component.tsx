"use client";

import { URLS } from "@/src/constants/url.ko";
import { loadingState } from "@/src/stores/common";
import classNames from "classnames";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { FC, ReactElement } from "react";
import debounce from "lodash/debounce";

interface LinkToProps {
  link: string;
  className?: string;
  children: ReactElement[] | ReactElement | string[] | string;
  onClick?: () => void;
}

const LinkTo: FC<LinkToProps> = ({ link, className, children, onClick }) => {
  const setIsLoading = useSetAtom(loadingState);
  const router = useRouter();
  const viewLoading = debounce(() => {
    router.push(URLS[link as keyof typeof URLS].LINK);
  }, 600);

  return (
    <a
      onClick={() => {
        setIsLoading(true);
        onClick && onClick();
        viewLoading();
      }}
      className={classNames(className, "cursor-pointer")}
    >
      {children}
    </a>
  );
};
export default LinkTo;

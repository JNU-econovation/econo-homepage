"use client";

import { URLS } from "@/src/assets/constants/url.ko";
import Link from "next/link";
import { FC, ReactElement } from "react";

interface LinkToProps {
  link: string;
  className?: string;
  children: ReactElement[] | ReactElement | string[] | string;
  onClick?: () => void;
}

const LinkTo: FC<LinkToProps> = ({ link, className, children, onClick }) => (
  <Link
    onClick={onClick}
    href={URLS[link as keyof typeof URLS].LINK}
    className={className}
  >
    {children}
  </Link>
);

export default LinkTo;

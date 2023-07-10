"use client";

import { URLS } from "@/src/assets/constants/url.ko";
import Link from "next/link";

const LinkTo = ({
  link,
  className,
  children,
}: {
  link: string;
  className?: string;
  children: React.ReactElement[] | React.ReactElement | string[] | string;
}) => (
  <Link href={URLS[link as keyof typeof URLS].LINK} className={className}>
    {children}
  </Link>
);

export default LinkTo;

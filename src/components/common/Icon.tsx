import { cn } from "@/src/functions/util";
import Image from "next/image";
import RightArrowCircle from "/public/icons/right-arrow-circle.svg";
import Hamburger from "/public/icons/hamburger.svg";
import RightUpDirection from "/public/icons/right-up-direction.svg";

interface IconProps {
  className?: string;
  icon: keyof typeof iconType;
}

const iconType = {
  "right-arrow-circle": {"src":RightArrowCircle , alt:"right arrow circle" },
  "hamberger": {"src":Hamburger, alt:"hamberger" },
  "right-up-direction": {"src":RightUpDirection, alt:"right up direction" },
}

export const Icon = ({className, icon}: IconProps) => {
  const {alt, src} = iconType[icon];
  return <Image className={cn(className)} alt={alt} src={src}  />
}
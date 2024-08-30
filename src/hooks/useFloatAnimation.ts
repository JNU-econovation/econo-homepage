import gsap from "gsap";
import { useRef } from "react";

const useFloatAnimation = () => {
  const floatRef = useRef<HTMLDivElement>(null);
  const floatDetailRef = useRef<HTMLDivElement>(null);

  const showDetail = () => {
    gsap.to(floatDetailRef.current, {
      duration: 0.5,
      bottom: "-1rem",
      ease: "back.out",
    });
    gsap.to(floatRef.current, {
      duration: 0.5,
      bottom: "-150%",
      ease: "back.in",
    });
  };

  const closeDetail = () => {
    gsap.to(floatDetailRef.current, {
      duration: 0.5,
      bottom: "-200%",
      ease: "back.in",
    });
    gsap.to(floatRef.current, {
      duration: 0.5,
      bottom: "-1rem",
      ease: "back.out",
    });
  };

  return { floatDetailRef, floatRef, showDetail, closeDetail };
};

export default useFloatAnimation;

"use client";

import { useEffect, useState } from "react";
import {
  PORTFOLIO,
  PORTFOLIO_MENU,
} from "@/src/constants/portfolio/portfolio.ko";
import { URLS } from "@/src/constants/url.ko";
import gsap from "gsap";
import { LinkTo } from "@/src/components/common/LinkTo";
import { cn } from "@/src/functions/util";

const { TITLE } = PORTFOLIO;

export const PortfolioNavbar = () => {
  const [isShowPortfolioMenu, setIsShowPortfolioMenu] = useState(false);

  const isUrlMatch = (url: string) => {
    if (typeof window === "undefined") return false;

    return URLS[url as keyof typeof URLS].LINK === window.location.pathname;
  };

  const togglePortfolioMenu = () => {
    setIsShowPortfolioMenu((prev) => !prev);

    gsap.to(".portfolio-menu-subtitles", {
      opacity: isShowPortfolioMenu ? 0 : 1,
      zIndex: isShowPortfolioMenu ? -1 : 70,
      duration: 0.5,
    });

    gsap.to(".screen-bg-cover", {
      opacity: isShowPortfolioMenu ? 0 : 0.7,
      zIndex: isShowPortfolioMenu ? -1 : 69,
      duration: 0.5,
    });

    if (typeof window === "undefined") return false;
    if (window.innerWidth > 1200) {
      gsap.to(".portfolio-menu-cover", {
        zIndex: isShowPortfolioMenu ? 10 : 70,
        duration: 0.5,
        scale: isShowPortfolioMenu ? 1 : 1.2,
        translateY: "0",
      });

      gsap.to(".portfolio-menu-buttom-image", {
        rotate: isShowPortfolioMenu ? 0 : 45,
        duration: 0.5,
      });
    } else {
      gsap.to(".portfolio-menu-cover", {
        zIndex: isShowPortfolioMenu ? 10 : 70,
        duration: 0.5,
        translateY: "0",
      });

      gsap.to(".portfolio-menu-buttom-image", {
        rotate: isShowPortfolioMenu ? 0 : 45,
        duration: 0.5,
      });
    }
  };

  useEffect(() => {
    const addSmallNavbar = () => {
      gsap.to(".portfolio-menu-cover", {
        translateY: "-2rem",
        scale: 0.5,
        duration: 0.5,
      });
    };

    const removeSmallNavbar = () => {
      gsap.to(".portfolio-menu-cover", {
        translateY: "0",
        scale: 1,
        duration: 0.5,
      });
    };

    const onScroll = (e: WheelEvent) => {
      if (isShowPortfolioMenu) return;
      if (typeof window === "undefined") return;
      if (window.innerWidth < 1200) return;

      if (e.deltaY > 0) {
        addSmallNavbar();
      } else {
        removeSmallNavbar();
      }
    };

    window.addEventListener("wheel", onScroll);
    return () => {
      window.removeEventListener("wheel", onScroll);
    };
  }, [isShowPortfolioMenu]);

  useEffect(() => {
    const resetNavbar = () => {
      if (window.innerWidth > 1024) {
        gsap.to(".portfolio-menu-cover", {
          translateY: 0,
          scale: 0.5,
          duration: 0.5,
        });
      }
    };
    window.addEventListener("resize", resetNavbar);
    return () => {
      window.removeEventListener("resize", resetNavbar);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed top-0 z-20 flex w-full justify-center bg-gradient-to-b from-white"></div>
      <h1 className="portfolio-menu-cover fixed top-0 z-20 mt-12 flex w-full justify-center font-bold max-lg:mt-2 max-lg:scale-[.4]">
        <button
          className="portfolio-menu-button flex items-center outline-none"
          onClick={togglePortfolioMenu}
        >
          <h1 className="mr-4 text-9xl uppercase">{TITLE}</h1>
          <img
            className="portfolio-menu-buttom-image"
            src="/icons/multiply.svg"
            alt="multiply"
          />
        </button>
      </h1>
      <div className="screen-bg-cover fixed -z-10 h-full w-full bg-white opacity-0"></div>
      <div className="h-[14rem] max-lg:h-[2.5rem]"></div>
      <div className="portfolio-menu-subtitles fixed top-48 -z-10 flex w-full flex-col items-center gap-4 text-7xl font-bold opacity-0 max-lg:top-14 max-lg:scale-[.5]">
        {PORTFOLIO_MENU.map((menu, index) => (
          <LinkTo key={index} link={menu.LINK}>
            <div
              className={cn({
                "text-gray-400": !isUrlMatch(menu.LINK),
              })}
            >
              {menu.NAME}
            </div>
          </LinkTo>
        ))}
      </div>
    </>
  );
};

"use client";

import { useEffect, useState } from "react";
import {
  PORTFOLIO,
  PORTFOLIO_MENU,
} from "@/src/assets/constants/portfolio/portfolio.ko";
import { URLS } from "@/src/assets/constants/url.ko";
import gsap from "gsap";
import LinkTo from "@components/common/LinkTo.component";
import classNames from "classnames";

const { TITLE } = PORTFOLIO;

const PortfolioNavbar = () => {
  const [isShowPortfolioMenu, setIsShowPortfolioMenu] = useState(false);

  const isUrlMatch = (url: string) => {
    if (typeof window === "undefined") return false;

    return URLS[url as keyof typeof URLS].LINK === window.location.pathname;
  };

  const togglePortfolioMenu = () => {
    setIsShowPortfolioMenu((prev) => !prev);

    gsap.to(".portfolio-menu-cover", {
      zIndex: isShowPortfolioMenu ? 10 : 100,
      duration: 0.5,
      scale: isShowPortfolioMenu ? 1 : 1.2,
      translateY: "0",
    });

    gsap.to(".portfolio-menu-buttom-image", {
      rotate: isShowPortfolioMenu ? 0 : 45,
      duration: 0.5,
    });

    gsap.to(".screen-bg-cover", {
      opacity: isShowPortfolioMenu ? 0 : 0.7,
      zIndex: isShowPortfolioMenu ? -1 : 99,
      duration: 0.5,
    });

    gsap.to(".portfolio-menu-subtitles", {
      opacity: isShowPortfolioMenu ? 0 : 1,
      zIndex: isShowPortfolioMenu ? -1 : 100,
      duration: 0.5,
    });
  };

  useEffect(() => {
    const addSmallNavbar = () => {
      gsap.to(".portfolio-menu-cover", {
        translateY: "-4.5rem",
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
      if (isShowPortfolioMenu) {
        return;
      }

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

  return (
    <>
      <div className="w-full flex justify-center bg-gradient-to-b from-white z-20 fixed top-0 pointer-events-none"></div>
      <h1 className="w-full flex justify-center font-bold z-20 mt-20 fixed top-0 portfolio-menu-cover">
        <button
          className="flex items-center portfolio-menu-button outline-none"
          onClick={togglePortfolioMenu}
        >
          <h1 className="text-9xl uppercase mr-4">{TITLE}</h1>
          <img
            className="portfolio-menu-buttom-image"
            src="/icons/multiply.svg"
            alt="multiply"
          />
        </button>
      </h1>
      <div className="fixed h-full w-full bg-white opacity-0 screen-bg-cover -z-10"></div>
      <div className="h-[14rem]"></div>
      <div className="fixed flex flex-col items-center w-full text-7xl font-bold gap-4 opacity-0  portfolio-menu-subtitles -z-10">
        {PORTFOLIO_MENU.map((menu, index) => (
          <LinkTo key={index} link={menu.LINK}>
            {
              <div
                className={classNames({
                  "text-gray-400": !isUrlMatch(menu.LINK),
                })}
              >
                {menu.NAME}
              </div>
            }
          </LinkTo>
        ))}
      </div>
    </>
  );
};

export default PortfolioNavbar;

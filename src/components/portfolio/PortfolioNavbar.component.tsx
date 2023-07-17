"use client";

import { useState } from "react";
import {
  PORTFOLIO,
  PORTFOLIO_MENU,
} from "@/src/assets/constants/portfolio/portfolio.ko";
import { URLS } from "@/src/assets/constants/url.ko";
import gsap from "gsap";
import LinkTo from "../common/Link.component";
import classNames from "classnames";

const { TITLE } = PORTFOLIO;

const PortfolioNavbar = () => {
  const [isShowPortfolioMenu, setIsShowPortfolioMenu] = useState(false);

  const togglePortfolioMenu = () => {
    setIsShowPortfolioMenu((prev) => !prev);

    gsap.to(".portfolio-menu-cover", {
      zIndex: isShowPortfolioMenu ? 10 : 100,
      duration: 0.5,
    });

    gsap.to(".portfolio-menu-button", {
      scale: isShowPortfolioMenu ? 1 : 1.2,
      duration: 0.5,
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

  return (
    <>
      <h1 className="w-full flex justify-center bg-gradient-to-b font-bold from-white z-20 pt-20 fixed top-0 portfolio-menu-cover">
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
      <div className="fixed h-full w-full bg-white opacity-0 screen-bg-cover"></div>
      <div className="h-[14rem]"></div>
      <div className="fixed flex flex-col items-center w-full text-7xl font-bold gap-4 opacity-0  portfolio-menu-subtitles">
        {PORTFOLIO_MENU.map((menu, index) => (
          <LinkTo key={index} link={menu.LINK}>
            {
              <div
                className={classNames({
                  "text-[#878787]":
                    URLS[menu.LINK as keyof typeof URLS].LINK !==
                    window.location.pathname,
                })}
              >
                {menu.TITLE}
              </div>
            }
          </LinkTo>
        ))}
      </div>
    </>
  );
};

export default PortfolioNavbar;

"use client";

import { HAMBGER_MENU } from "@/src/constants/common.ko";
import Image from "next/image";
import { Dispatch, FC, Fragment, SetStateAction, useState } from "react";
import backgorundImage from "/public/images/hamburger-background.png";
import econovationWhiteLogo from "/public/images/econovation-white.svg";
import { LinkTo } from "./LinkTo";
import { cn } from "@/src/functions/util";
import { Icon } from "./Icon";
import { URLS } from "@/src/constants/url.ko";

interface HambergerChildMenuProps {
  hamburgerChildData: { NAME: string; LINK: keyof typeof URLS }[];
  isOpen: boolean;
}

const HambergerChildMenu: FC<HambergerChildMenuProps> = ({
  hamburgerChildData,
  isOpen,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 transition-all duration-500",
        isOpen ? `h-[8rem] opacity-100` : "h-0 opacity-0"
      )}
    >
      {hamburgerChildData.map((child, index) => (
        <LinkTo
          key={index}
          link={child.LINK}
          className="w-fit text-5xl font-light uppercase max-2xl:text-3xl max-md:text-2xl"
        >
          {child.NAME}
        </LinkTo>
      ))}
    </div>
  );
};

interface HambergerNavMainProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isShowSubMenu: boolean[];
  setIsShowSubMenu: Dispatch<SetStateAction<boolean[]>>;
}

const HambergerNavMain: FC<HambergerNavMainProps> = ({
  isOpen,
  isShowSubMenu,
  setIsShowSubMenu,
}) => {
  return (
    <div
      className={cn(
        "mx-auto my-0 w-full text-white [transition:transform_.6s_cubic-bezier(0.38,0.005,0.215,1),opacity_.6s_cubic-bezier(0.38,0.005,0.215,1)] ",
        isOpen
          ? "translate-y-0 opacity-100 delay-200"
          : "translate-y-[-2.5rem] opacity-0 delay-0"
      )}
    >
      <div className="mb-8 flex flex-col items-center gap-2 font-semibold">
        {HAMBGER_MENU.MENUS.map((menu, index) => (
          <Fragment key={index}>
            {menu.CHILDREN ? (
              <button
                className="z-[2] w-fit text-7xl uppercase max-2xl:text-6xl max-md:text-4xl"
                onClick={() => {
                  setIsShowSubMenu((prev) => {
                    prev[index] = !prev[index];
                    return [...prev];
                  });
                }}
              >
                {menu.NAME}
              </button>
            ) : (
              <LinkTo
                link={menu.LINK}
                className={cn(
                  "z-[2] w-fit text-7xl uppercase max-2xl:text-6xl max-md:text-4xl",
                  { "blur-sm": isShowSubMenu.some((isOpen) => isOpen) }
                )}
              >
                {menu.NAME}
              </LinkTo>
            )}
            {menu.CHILDREN && (
              <HambergerChildMenu
                hamburgerChildData={menu.CHILDREN}
                isOpen={isShowSubMenu[index]}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
interface HambergerMenuProps {
  isWhite?: boolean;
  isMain?: boolean;
}

export const HambergerMenu: FC<HambergerMenuProps> = ({
  isWhite = false,
  isMain = false,
}) => {
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean[]>(
    HAMBGER_MENU.MENUS.map(() => false)
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      <button
        className={cn(
          isMain
            ? "scale-75 px-4 py-12 brightness-0"
            : "fixed left-14 top-14 z-50 h-fit w-fit max-sm:left-4 max-sm:scale-75",
          {
            "brightness-0": !isWhite,
          }
        )}
        onClick={() => setIsOpen(true)}
      >
        <Icon icon="hamberger" />
      </button>
      <div
        className={cn(
          "ease-[cubic-bezier(0.38, 0.005, 0.215, 1)] pointer-events-auto fixed left-0 top-0 z-[100] m-0 flex h-full min-h-screen w-full flex-col items-center justify-between overflow-hidden text-white transition-transform duration-[0.6s]",
          isOpen
            ? "visible translate-y-[0%] [transition:transform_.6s_cubic-bezier(0.38,0.005,0.215,1),visibility_0s_0s_linear]"
            : "invisible translate-y-[-105%] [transition:transform_.6s_cubic-bezier(0.38,0.005,0.215,1),visibility_0s_0.6s_linear]"
        )}
      >
        <div className="absolute h-full w-full bg-white">
          <Image src={backgorundImage} alt="hanburger-background" fill={true} />
        </div>
        <div
          className={cn(
            "ease-[cubic-bezier(0.38, 0.005, 0.215, 1)] flex min-h-screen flex-col p-12 transition-transform duration-[0.6s]",
            isOpen
              ? "bottom-0 left-0 right-0 top-0 translate-y-[0%]"
              : "translate-y-[100%] overflow-auto"
          )}
        >
          <div className="ease-[cubic-bezier(0.38, 0.005, 0.215, 1)] relative flex flex-grow flex-col pb-[1.25rem] transition-all duration-[0.6s]">
            <div className="flex h-full flex-col text-center lg:justify-between">
              <button
                className={cn(
                  "z-[2] translate-y-[-2.5rem] px-8 py-4 text-2xl uppercase text-white opacity-0 delay-0",
                  { "translate-y-[0%] opacity-100 delay-[50]": isOpen }
                )}
                onClick={() => setIsOpen(false)}
              >
                {HAMBGER_MENU.CLOSE}
              </button>
              <HambergerNavMain
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isShowSubMenu={isShowSubMenu}
                setIsShowSubMenu={setIsShowSubMenu}
              />
            </div>
            <LinkTo link="HOME" className="w-full shrink-0 overflow-hidden">
              <Image
                className={cn(
                  "ease-[cubic-bezier(0.38, 0.005, 0.215, 1)] flex justify-center transition-transform duration-[0.6s]",
                  isOpen ? "translate-y-0" : "translate-y-full"
                )}
                src={econovationWhiteLogo}
                alt="econovation"
              />
            </LinkTo>
          </div>
        </div>
      </div>
    </nav>
  );
};

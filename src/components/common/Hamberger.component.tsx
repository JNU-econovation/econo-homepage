"use client";

import { HAMBGER_MENU } from "@/src/assets/constants/common.ko";
import classNames from "classnames";
import Image from "next/image";
import { Dispatch, FC, Fragment, SetStateAction, useState } from "react";
import backgorundImage from "/public/images/hamburger-background.png";
import econovationWhiteLogo from "/public/images/econovation-white.svg";
import LinkTo from "./LinkTo.component";

interface HambergerChildMenuProps {
  children: { NAME: string; LINK: string }[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HambergerChildMenu: FC<HambergerChildMenuProps> = ({
  children,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-2 duration-500 transition-all",
        isOpen
          ? `h-[${3.5 * children.length - 0.5}rem] opacity-100`
          : "h-0 opacity-0"
      )}
    >
      {children.map((child, index) => (
        <LinkTo
          onClick={() => setIsOpen(false)}
          key={index}
          link={child.LINK}
          className="font-light text-5xl uppercase w-fit max-2xl:text-3xl max-md:text-2xl"
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
  setIsOpen,
  isShowSubMenu,
  setIsShowSubMenu,
}) => {
  return (
    <div
      className={classNames(
        "w-full text-white my-0 mx-auto",
        isOpen
          ? "opacity-100 delay-200 translate-y-0"
          : "opacity-0 delay-0 translate-y-[-2.5rem]"
      )}
      style={{
        transition:
          "opacity .6s cubic-bezier(0.38, 0.005, 0.215, 1),transform .6s cubic-bezier(0.38, 0.005, 0.215, 1);",
      }}
    >
      <div className="flex flex-col items-center gap-2 mb-8 font-semibold">
        {HAMBGER_MENU.MENUS.map((menu, index) => (
          <Fragment key={index}>
            {menu.CHILDREN ? (
              <button
                className="text-7xl uppercase w-fit max-2xl:text-6xl max-md:text-4xl hamberger-menu-item"
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
                className={classNames(
                  "text-7xl uppercase w-fit max-2xl:text-6xl max-md:text-4xl hamberger-menu-item",
                  { blur: isShowSubMenu.some((isOpen) => isOpen) }
                )}
              >
                {menu.NAME}
              </LinkTo>
            )}
            {menu.CHILDREN && (
              <HambergerChildMenu
                children={menu.CHILDREN}
                isOpen={isShowSubMenu[index]}
                setIsOpen={setIsOpen}
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
}

const HambergerMenu: FC<HambergerMenuProps> = ({ isWhite = false }) => {
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean[]>(
    Array.from(
      {
        length: HAMBGER_MENU.MENUS.reduce((acc, cur) => {
          if (!cur.CHILDREN?.length) return acc;
          return acc + 1;
        }, 0),
      },
      () => false
    )
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      <button
        className={classNames("fixed w-fit h-fit z-50 left-14 top-14", {
          "brightness-0": !isWhite,
        })}
        onClick={() => setIsOpen(true)}
      >
        <img src="/icons/hamburger.svg" alt="hamburger" />
      </button>
      <div
        className={classNames(
          "w-full h-full flex flex-col justify-between items-center text-white fixed top-0 left-0 m-0 z-[100] min-h-screen overflow-hidden pointer-events-auto transition-transform duration-[0.6s] ease-[cubic-bezier(0.38, 0.005, 0.215, 1)]",
          isOpen
            ? "visible translate-y-[0%] [transition:transform_.6s_cubic-bezier(0.38,0.005,0.215,1),visibility_0s_0s_linear]"
            : "invisible translate-y-[-105%] [transition:transform_.6s_cubic-bezier(0.38,0.005,0.215,1),visibility_0s_0.6s_linear]"
        )}
      >
        <div className="w-full h-full bg-white absolute">
          <Image src={backgorundImage} alt="hanburger-background" fill={true} />
        </div>
        <div
          className={classNames(
            "p-12 flex flex-col min-h-screen transition-transform duration-[0.6s] ease-[cubic-bezier(0.38, 0.005, 0.215, 1)]",
            isOpen
              ? "top-0 left-0 right-0 bottom-0 translate-y-[0%]"
              : "translate-y-[100%] overflow-auto"
          )}
        >
          <div className="relative flex flex-grow items-center flex-col pb-[1.25rem] justify-end transition-all duration-[0.6s] ease-[cubic-bezier(0.38, 0.005, 0.215, 1)]">
            <button
              className={classNames(
                "absolute left-1/2 z-[2] w-[12.5rem] ml-[-6.25rem] mt-12 top-0 inline-flex items-center justify-center delay-0 opacity-0 translate-y-[-2.5rem] text-white text-2xl uppercase",
                { "delay-[50] translate-y-[0%] opacity-100": isOpen }
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
            <button className="w-full overflow-hidden shrink-0">
              <Image
                className={classNames(
                  "flex justify-center transition-transform duration-[0.6s] ease-[cubic-bezier(0.38, 0.005, 0.215, 1)]",
                  isOpen ? "translate-y-0" : "translate-y-full"
                )}
                src={econovationWhiteLogo}
                alt="econovation"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HambergerMenu;

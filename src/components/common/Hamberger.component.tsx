import { HAMBGER_MENU } from "@/src/assets/constants/common.ko";
import classNames from "classnames";
import Image from "next/image";
import { FC, Fragment, useEffect, useRef, useState } from "react";
import backgorundImage from "/public/images/hamburger-background.png";
import econovationWhiteLogo from "/public/images/econovation-white.svg";
import LinkTo from "./LinkTo.component";
import gsap from "gsap";

interface HambergerMenuProps {
  isWhite: boolean;
}

interface HambergerChildMenuProps {
  children: { NAME: string; LINK: string }[];
  isOpen: boolean;
}

const HambergerChildMenu: FC<HambergerChildMenuProps> = ({
  children,
  isOpen,
}) => {
  const wapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(wapperRef.current, {
      opacity: isOpen ? 1 : 0,
      height: isOpen ? `${3.5 * children.length - 0.5}rem` : 0,
      duration: 0.5,
    });
  }, [isOpen]);

  return (
    <div
      className="flex flex-col items-center gap-2 opacity-0 h-0"
      ref={wapperRef}
    >
      {children.map((child, index) => (
        <LinkTo
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

const HambergerMenu: FC<HambergerMenuProps> = ({ isWhite }) => {
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
  const HambergerMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(HambergerMenuRef.current, {
      transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
      duration: 0.5,
    });
  }, [isOpen]);

  return (
    <>
      <button
        className={classNames("fixed w-fit h-fit z-50 left-14 top-14", {
          "brightness-0": isWhite,
        })}
        onClick={() => setIsOpen(true)}
      >
        <img src="/icons/hamburger.svg" alt="hamburger" />
      </button>
      <div
        className="-translate-y-full fixed top-0 left-0 h-full w-full z-50"
        ref={HambergerMenuRef}
      >
        <div className="absolute z-50 w-full h-full bg-white">
          <Image
            className="-z-10"
            src={backgorundImage}
            alt="hanburger-background"
            fill={true}
          />
          <div className="w-full h-full max-w-[1920px] flex flex-col justify-between items-center p-12 text-white z-10">
            <button
              className="text-2xl uppercase"
              onClick={() => setIsOpen(false)}
            >
              {HAMBGER_MENU.CLOSE}
            </button>
            <div className="w-full">
              <div className="flex flex-col items-center gap-2 mb-8 font-semibold">
                {HAMBGER_MENU.MENUS.map((menu, index) => (
                  <Fragment key={index}>
                    {menu.CHILDREN ? (
                      <button
                        className="text-7xl uppercase w-fit max-2xl:text-6xl max-md:text-4xl"
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
                          "text-7xl uppercase w-fit max-2xl:text-6xl max-md:text-4xl transition-all duration-500",
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
                      />
                    )}
                  </Fragment>
                ))}
              </div>
              <Image
                className="w-full"
                src={econovationWhiteLogo}
                alt="econovation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HambergerMenu;

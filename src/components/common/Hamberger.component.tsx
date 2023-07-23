import { HAMBGER_MENU } from "@/src/assets/constants/common.ko";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import backgorundImage from "/public/images/hamburger-background.png";
import econovationWhiteLogo from "/public/images/econovation-white.svg";

interface HambergerMenuProps {
  isWhite: boolean;
}

const HambergerMenu: FC<HambergerMenuProps> = ({ isWhite }) => {
  return (
    <>
      <button
        className={classNames("fixed w-fit h-fit z-50 left-14 top-14", {
          "brightness-0": isWhite,
        })}
      >
        <img src="/icons/hamburger.svg" alt="hamburger" />
      </button>
      <div className="absolute z-50 w-full h-full bg-white">
        <Image
          className="-z-10"
          src={backgorundImage}
          alt="hanburger-background"
          fill={true}
        />
        <div className="w-full h-full max-w-[1920px] flex flex-col justify-between items-center p-12 text-white z-10">
          <button className="text-2xl uppercase">{HAMBGER_MENU.CLOSE}</button>
          <div className="w-full">
            <div className="flex flex-col gap-4">
              {HAMBGER_MENU.MENUS.map((menu, index) => (
                <button key={index} className="text-2xl uppercase">
                  {menu}
                </button>
              ))}
            <Image
              className="w-full"
              src={econovationWhiteLogo}
              alt="econovation"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HambergerMenu;

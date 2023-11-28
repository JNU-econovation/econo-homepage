import Image from "next/image";
import backgorundImage from "/public/images/hamburger-background.png";
import econovationWhiteLogo from "/public/images/econovation-white.svg";
import { cn } from "@/src/functions/util";

export const Loading = ({ isLoading = false }) => {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-between items-center text-white fixed top-0 left-0 m-0 z-[1000] min-h-screen overflow-hidden pointer-events-auto transition-transform duration-[0.6s] ease-[cubic-bezier(0.38, 0.005, 0.215, 1)]",
        isLoading
          ? "visible translate-y-[0%] [transition:transform_.6s_cubic-bezier(0.38,0.005,0.215,1),visibility_0s_0s_linear]"
          : "invisible translate-y-[-105%] [transition:transform_.6s_cubic-bezier(0.38,0.005,0.215,1),visibility_0s_0.6s_linear]"
      )}
    >
      <div className="w-full h-full bg-white absolute">
        <Image src={backgorundImage} alt="hanburger-background" fill={true} />
      </div>
      <div className="m-auto mb-0 w-full overflow-hidden shrink-0 ">
        <Image
          className="flex justify-center translate-y-0 m-auto mb-8"
          src={econovationWhiteLogo}
          alt="econovation"
        />
      </div>
    </div>
  );
};

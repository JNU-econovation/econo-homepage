import { HACKATHON_POSTER } from "@/src/constants/portfolio/hackathon.ko";
import { HambergerMenu } from "../../common/Hamberger";
import { PortfolioNavbar } from "../Navbar";
import Image from "next/image";

export const Hackathon = () => {
  return (
    <>
      <HambergerMenu />
      <PortfolioNavbar />
      <div className="m-auto mt-24 grid max-w-[1920px] grid-cols-3 gap-8 px-24 max-2xl:grid-cols-1 max-md:px-6">
        {HACKATHON_POSTER.map((poster, index) => (
          <div
            className="flex h-full w-full justify-center object-cover"
            key={index}
          >
            <Image
              className="w-full max-2xl:w-[40rem]"
              key={index}
              src={poster.LINK}
              alt={poster.NAME}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </>
  );
};

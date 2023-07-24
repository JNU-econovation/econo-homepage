import { HACKATHON_POSTER } from "@/src/assets/constants/portfolio/hackathon.ko";
import HambergerMenu from "../../common/Hamberger.component";
import PortfolioNavbar from "../PortfolioNavbar.component";
import Image from "next/image";

const Hackathon = () => {
  return (
    <>
      <HambergerMenu />
      <PortfolioNavbar />
      <div className="grid grid-cols-3 px-24 mt-24 max-w-[1920px] m-auto gap-8 max-2xl:grid-cols-1">
        {HACKATHON_POSTER.map((poster, index) => (
          <div className="w-full h-full object-cover flex justify-center">
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

export default Hackathon;

import { NAV } from "@/assets/constants/nav.ko.json";
import recruitString from "@/assets/constants/recruit.ko.json";
import LinkTo from "@/components/common/Link.component";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between min-h-fit px-12 mt-12">
      <div>
        {NAV.filter((data) => data.POSITION === "left").map((data) => (
          <LinkTo
            className="py-4 px-8 uppercase text-xl"
            key={data.LINK}
            link={data.LINK}
          >
            {data.NAME}
          </LinkTo>
        ))}
      </div>
      <div>
        {NAV.filter((data) => data.POSITION === "right").map((data) => (
          <LinkTo
            className="p-2 bg-[#0038FF] text-white uppercase text-xl"
            key={data.LINK}
            link={data.LINK}
          >
            {`${recruitString.PERIOD}TH`} {data.NAME}
          </LinkTo>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

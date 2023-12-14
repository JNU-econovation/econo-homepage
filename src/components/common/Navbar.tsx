import { RECRUIT } from "@/src/constants/recruit/recruit.ko";
import { LinkTo } from "@/src/components/common/LinkTo";
import { MAIN_NAV, MENU_STRING } from "@/src/constants/main.ko";

const NavbarDesktop = () => {
  return (
    <nav className="my-12 flex min-h-fit w-full justify-between px-12 text-xl max-lg:text-lg ">
      <div>
        {MAIN_NAV.filter((data) => data.POSITION === "left").map((data) => (
          <LinkTo
            className="px-8 py-4 uppercase first:pl-0"
            key={data.LINK}
            link={data.LINK}
          >
            {data.NAME}
          </LinkTo>
        ))}
      </div>
      <div>
        {MAIN_NAV.filter((data) => data.POSITION === "right").map((data) => (
          <LinkTo
            className="bg-[#0038FF] p-2 uppercase text-white"
            key={data.LINK}
            link={data.LINK}
          >
            {`${RECRUIT.GENERTAION}TH`} {data.NAME}
          </LinkTo>
        ))}
      </div>
    </nav>
  );
};

const NavbarMobile = () => {
  return (
    <nav className="mb-6 mt-12 flex min-h-fit w-full justify-between px-4">
      {MENU_STRING}
    </nav>
  );
};

export const Navbar = () => {
  return (
    <>
      <div className="max-md:hidden">
        <NavbarDesktop />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
    </>
  );
};

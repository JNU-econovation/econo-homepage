import strings from "@/assets/strings/nav.ko.json";
import recruitString from "@/assets/strings/recruit.ko.json";
import LinkTo from "@/components/common/Link.component";

const Navbar = () => {
  const navData = strings.nav;

  return (
    <div className="flex w-full justify-between min-h-fit px-12 mt-12">
      <div>
        {navData
          .filter((data) => data.position === "left")
          .map((data) => (
            <LinkTo
              className="py-4 px-8 uppercase text-xl"
              key={data.link}
              link={data.link}
            >
              {data.name}
            </LinkTo>
          ))}
      </div>
      <div>
        {navData
          .filter((data) => data.position === "right")
          .map((data) => (
            <LinkTo
              className="p-2 bg-[#0038FF] text-white uppercase text-xl"
              key={data.link}
              link={data.link}
            >
              {`${recruitString.peroid}TH`} {data.name}
            </LinkTo>
          ))}
      </div>
    </div>
  );
};

export default Navbar;

import strings from "@/assets/strings/common.ko.json";
import rightArrowCirle from "@/assets/right-arrow-circle.svg";
import LinkTo from "@/components/common/Link.component";

const Footer = () => {
  const data = strings.footer;
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="w-full mt-52 uppercase">
      <div className="flex w-full px-16 ">
        <div className="flex flex-col justify-between flex-[3_1_0%] border-r border-black h-[40rem]">
          <h1 className="text-6xl">{data.title}</h1>
          <div className="text-2xl">
            {data.contact.map((d, i) => (
              <LinkTo
                link={d.link}
                key={i}
                className="flex align-baseline my-4"
              >
                <img
                  src={rightArrowCirle}
                  alt="rightArrow"
                  className="inline mr-4 h-8 w-8"
                />
                <span>{d.name}</span>
              </LinkTo>
            ))}
          </div>
          <div className="my-12">
            <div className="uppercase">{data.address.en}</div>
            <div>{data.address.ko}</div>
          </div>
        </div>
        <div className="flex flex-col justify-end flex-1 text-base gap-4 m-10">
          {data.social.map((d, i) => (
            <LinkTo link={d.link} key={i}>
              <span>{d.name}</span>
            </LinkTo>
          ))}
        </div>
      </div>
      <button
        onClick={backToTop}
        className="flex justify-center items-center h-[10rem] bg-black text-white text-xl w-full cursor-pointer uppercase"
      >
        {data.toTop}
      </button>
    </footer>
  );
};

export default Footer;

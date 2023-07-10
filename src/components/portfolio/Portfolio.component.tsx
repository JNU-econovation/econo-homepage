import { PORTFOLIO } from "@/src/assets/constants/portfolio/portfolio.ko";

const { TITLE, DATA } = PORTFOLIO;

const Portfolio = () => {
  return (
    <>
      <div className="absolute top-0 w-full flex justify-center bg-gradient-to-b from-white z-10 mt-20">
        <h1 className="text-9xl uppercase">{TITLE}</h1>
        <button>
          <img src="/icons/multiply.svg" alt="multiply" />
        </button>
      </div>
      <div className="h-[14rem]"></div>
      <div className="px-12 flex-col">
        {DATA.map((item, index) => (
          <div key={index} className="flex justify-center w-full">
            <h2 className="flex-1">{item.TITLE}</h2>
            <div className="flex-1">
              <img
                className="w-full"
                src={item.BG_IMAGE}
                alt={item.INTRODUCTION[0].LINK}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;

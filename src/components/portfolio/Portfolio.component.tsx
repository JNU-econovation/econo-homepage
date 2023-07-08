import { TITLE } from "@/assets/constants/portfolio/portfolio.ko.json";

const Portfolio = () => {
  return (
    <>
      <div className="absolute top-0 w-full flex justify-center bg-gradient-to-b from-white z-10 mt-20">
        <h1 className="text-9xl uppercase">{TITLE}</h1>
        <button>
          <img src="/multiply.svg" alt="multiply" />
        </button>
      </div>
      <div className="h-[14rem]"></div>
      <div className="px-12 flex justify-center w-full">
        <div className="flex-1">T-ECONO</div>
        <div className="flex-1">asfd</div>
      </div>
    </>
  );
};

export default Portfolio;

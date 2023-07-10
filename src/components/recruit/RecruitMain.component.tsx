import { RECRUIT } from "@/src/assets/constants/recruit.ko";
import LinkTo from "../common/Link.component";

const RecruitMain = () => {
  return (
    <div className="flex flex-col justify-center items-center text-xl leading-relaxed h-screen">
      <div>
        <h1 className="text-[9.5rem] uppercase font-bold text-center my-8 leading-[9.5rem]">
          {RECRUIT.TITLE}
        </h1>
        <div className="text-center my-20">
          {RECRUIT.CONTENT.split("\n").map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
      </div>
      {RECRUIT.IS_ON && (
        <div className="flex items-center justify-center mt-24 mb-32">
          <LinkTo
            link="APPLY_LINK"
            className="flex bg-[#0038FF] text-white px-6 py-3 gap-4 rounded-full text-xl items-center"
          >
            <span>{RECRUIT.PERIOD}기 지원하기</span>
            <img
              className="h-6"
              src="/icons/right-arrow-circle-white.svg"
              alt="right arrow"
            />
          </LinkTo>
        </div>
      )}
      <div className="w-full grid grid-cols-[repeat(2,minmax(16rem,_1fr))] gap-16 xl:grid-cols-[repeat(4,minmax(16rem,_1fr))]">
        {RECRUIT.SCHEDULE.map((d, i) => (
          <div className="w-full" key={i}>
            <div className="text-6xl mb-6 tracking-tighter">{d.DATE}</div>
            <div className="border-t-[0.5px] w-full border-black relative after:border-t-[1px] after:border-r-[1px] after:rotate-45 after:right-[1px] after:-bottom-[6px] after:h-[12px] after:w-[12px] after:absolute after:border-black"></div>
            <div className="text-lg mt-4">{d.TEXT}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitMain;

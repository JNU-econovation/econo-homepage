import { SERVICES } from "@/src/constants/common.ko";
import LinkTo from "@components/common/LinkTo.component";

const { ECONOVATION_DEV, ECONO_RECRUIT, OTHER } = SERVICES;

const Service = () => {
  return (
    <div className="flex w-full gap-2 px-14 py-24 uppercase" id="services">
      <LinkTo
        link={ECONOVATION_DEV.LINK}
        className="flex-1 h-[50vh] min-h-[40rem] text-6xl relative max-xl:text-4xl"
      >
        <div className="w-full h-full flex justify-center items-center bg-[#0038FF] border-2 border-[#0038FF] text-white transition-all duration-500 opacity-100 hover:opacity-0">
          {ECONOVATION_DEV.TITLE}
        </div>
        <div className="w-full h-full absolute top-0 left-0 -z-10 flex justify-center items-center border-2 border-[#0038FF] text-[#0038FF] bg-white">
          {ECONOVATION_DEV.TITLE_KO}
        </div>
      </LinkTo>
      <div className="flex flex-col flex-1 gap-2">
        <LinkTo link={ECONO_RECRUIT.LINK} className="flex-1 relative">
          <div className="w-full h-full flex flex-col justify-end p-4 bg-black border-2 border-black text-white transition-all duration-500 opacity-100 hover:opacity-0">
            <div className="text-4xl font-light max-xl:text-3xl">
              {ECONO_RECRUIT.TITLE}
            </div>
            <div className="text-[#696969] text-3xl max-xl:text-2xl">
              ({ECONO_RECRUIT.SUBTITLE})
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0 -z-10 flex flex-col justify-end p-4 border-2 border-black text-black bg-white">
            <div className="text-4xl font-light">{ECONO_RECRUIT.TITLE_KO}</div>
            <div className="text-[#696969] text-3xl max-xl:text-2xl">
              ({ECONO_RECRUIT.SUBTITLE_KO})
            </div>
          </div>
        </LinkTo>
        {OTHER.map((item) => (
          <LinkTo
            key={item.TITLE}
            link={item.LINK}
            className="text-4xl font-light relative"
          >
            <div className="w-full h-full flex justify-between items-center p-4 bg-[#E5E5E5] text-black transition-all duration-500 opacity-100 hover:opacity-0">
              {item.TITLE}
              <img
                src="/icons/right-arrow-circle.svg"
                alt="right arrow circle"
              />
            </div>
            <div className="w-full h-full absolute top-0 left-0 -z-10 flex justify-between items-center p-4 border-2 border-black text-black bg-white">
              {item.TITLE_KO}
              <img
                src="/icons/right-arrow-circle.svg"
                alt="right arrow circle"
              />
            </div>
          </LinkTo>
        ))}
      </div>
    </div>
  );
};

export default Service;

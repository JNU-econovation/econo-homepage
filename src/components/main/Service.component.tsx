import { SERVICES } from "@/src/assets/constants/service.ko";
import LinkTo from "../common/Link.component";

const { ECONOVATION_DEV, ECONO_RECRUIT, OTHER } = SERVICES;

const Service = () => {
  return (
    <div className="flex w-full gap-2 px-14 py-24 uppercase" id="services">
      <LinkTo
        link={ECONOVATION_DEV.LINK}
        className="flex justify-center items-center flex-1 h-[50vh] min-h-[40rem] bg-[#0038FF] text-6xl text-white"
      >
        {ECONOVATION_DEV.TITLE}
      </LinkTo>
      <div className="flex flex-col flex-1 gap-2">
        <LinkTo
          link={ECONO_RECRUIT.LINK}
          className="flex flex-col justify-end p-4 flex-1 bg-black text-white"
        >
          <div className="text-4xl font-light">{ECONO_RECRUIT.TITLE}</div>
          <div className="text-[#696969] text-3xl">
            ({ECONO_RECRUIT.SUBTITLE})
          </div>
        </LinkTo>
        {OTHER.map((item) => (
          <LinkTo
            key={item.TITLE}
            link={item.LINK}
            className="flex justify-between items-center p-4 bg-[#E5E5E5] text-4xl font-light"
          >
            <div>{item.TITLE}</div>
            <img src="/icons/right-arrow-circle.svg" alt="right arrow circle" />
          </LinkTo>
        ))}
      </div>
    </div>
  );
};

export default Service;

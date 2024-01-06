import { SERVICES } from "@/src/constants/common.ko";
import { LinkTo } from "@/src/components/common/LinkTo";
import { Icon } from "../common/Icon";

const { ECONOVATION_DEV, ECONO_RECRUIT, OTHER } = SERVICES;

const ServiceOther = () => {
  return (
    <>
      {OTHER.map((item) => (
        <LinkTo
          key={item.TITLE}
          link={item.LINK}
          className="relative text-4xl font-light"
        >
          <div className="flex h-full w-full items-center justify-between bg-[#E5E5E5] p-4 text-black opacity-100 transition-all duration-500 hover:opacity-0">
            {item.TITLE}
            <Icon icon="right-arrow-circle" />
          </div>
          <div className="max-[400px]: absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between border-2 border-black bg-white p-4 text-2xl text-black max-lg:text-2xl">
            {item.TITLE_KO}
            <Icon icon="right-arrow-circle" />
          </div>
        </LinkTo>
      ))}
    </>
  );
};

const ServiceDesktop = () => {
  return (
    <div className="flex w-full gap-2 py-24 uppercase" id="services">
      <LinkTo
        link={ECONOVATION_DEV.LINK}
        className="relative h-[50vh] min-h-[40rem] flex-1 text-6xl max-xl:text-4xl"
      >
        <div className="flex h-full w-full items-center justify-center border-2 border-[#0038FF] bg-[#0038FF] text-white opacity-100 transition-all duration-500 hover:opacity-0">
          {ECONOVATION_DEV.TITLE}
        </div>
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center border-2 border-[#0038FF] bg-white text-[#0038FF]">
          {ECONOVATION_DEV.TITLE_KO}
        </div>
      </LinkTo>
      <div className="flex flex-1 flex-col gap-2">
        <LinkTo link={ECONO_RECRUIT.LINK} className="relative flex-1">
          <div className="flex h-full w-full flex-col justify-end border-2 border-black bg-black p-4 text-white opacity-100 transition-all duration-500 hover:opacity-0">
            <div className="text-4xl font-light max-xl:text-3xl">
              {ECONO_RECRUIT.TITLE}
            </div>
            <div className="text-3xl text-[#696969] max-xl:text-2xl">
              ({ECONO_RECRUIT.SUBTITLE})
            </div>
          </div>
          <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col justify-end border-2 border-black bg-white p-4 text-black">
            <div className="text-4xl font-light">{ECONO_RECRUIT.TITLE_KO}</div>
            <div className="text-3xl text-[#696969] max-xl:text-2xl">
              ({ECONO_RECRUIT.SUBTITLE_KO})
            </div>
          </div>
        </LinkTo>
        <ServiceOther />
      </div>
    </div>
  );
};

const SerivceMobile = () => {
  return (
    <div className="my-24 flex w-full flex-col gap-2 uppercase" id="services">
      <LinkTo
        link={ECONOVATION_DEV.LINK}
        className="relative h-40 text-6xl max-xl:text-4xl max-[400px]:text-3xl max-[320px]:text-2xl"
      >
        <div className="flex h-full w-full items-center border-2 border-[#0038FF] bg-[#0038FF] p-4 text-white opacity-100 transition-all duration-500 hover:opacity-0">
          {ECONOVATION_DEV.TITLE}
        </div>
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center border-2 border-[#0038FF] bg-white p-4 text-[#0038FF]">
          {ECONOVATION_DEV.TITLE_KO}
        </div>
      </LinkTo>
      <LinkTo link={ECONO_RECRUIT.LINK} className="relative h-40 flex-1">
        <div className="flex h-40 w-full flex-col justify-center border-2 border-black bg-black p-4 text-white opacity-100 transition-all duration-500 hover:opacity-0">
          <div className="text-4xl font-light max-xl:text-3xl">
            {ECONO_RECRUIT.TITLE}
          </div>
          <div className="text-3xl text-[#696969] max-xl:text-2xl">
            ({ECONO_RECRUIT.SUBTITLE})
          </div>
        </div>
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col justify-center border-2 border-black bg-white p-4 text-black">
          <div className="text-4xl font-light max-lg:text-3xl max-[400px]:text-2xl">
            {ECONO_RECRUIT.TITLE_KO}
          </div>
          <div className="text-3xl text-[#696969] max-xl:text-2xl max-[400px]:text-xl">
            ({ECONO_RECRUIT.SUBTITLE_KO})
          </div>
        </div>
      </LinkTo>
      <ServiceOther />
    </div>
  );
};

export const Service = () => {
  return (
    <>
      <div className="max-lg:hidden">
        <ServiceDesktop />
      </div>
      <div className="lg:hidden">
        <SerivceMobile />
      </div>
    </>
  );
};

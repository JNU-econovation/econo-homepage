import { RECRUIT } from "@/src/constants/recruit/recruit.ko";
import { URLS } from "@/src/constants/url.ko";
import { LinkTo } from "@/src/components/common/LinkTo";

const { SUBSCRIPTION } = RECRUIT;

export const Subscription = () => {
  return (
    <div className="my-96 flex justify-between">
      <h1 className="mr-4 flex-1 font-medium uppercase">
        {SUBSCRIPTION.TITLE}
      </h1>
      <div className="flex-[2_1_0%]">
        <div className="flex w-full justify-between">
          {SUBSCRIPTION.CONTENTS.map((d, i) => (
            <div
              className="relative flex h-80 w-full min-w-[23rem] flex-col justify-between border-r border-black px-8 first:pl-0 last:min-w-[20rem] last:border-r-0 last:pr-0"
              key={i}
            >
              <div className="text-3xl font-normal">{d.TITLE}</div>
              {d.LINK ? (
                <LinkTo
                  link={d.LINK}
                  className="absolute top-14 flex items-center gap-4"
                  target="_blank"
                >
                  <img
                    className={`h-6 w-6`}
                    src="/icons/right-arrow-circle.svg"
                    alt="right-arrow"
                  />
                  <span className="text-lg">
                    {URLS[d.LINK as keyof typeof URLS].TEXT}
                  </span>
                </LinkTo>
              ) : (
                ""
              )}
              <div className="text-lg">
                <div className="mb-4 font-semibold">
                  {d.CONTENT.split("\n").map((cd, ci) => (
                    <div key={ci}>{cd}</div>
                  ))}
                </div>
                <div>
                  {d.SUBCONTENT.split("\n").map((cd, ci) => (
                    <div key={ci}>{cd}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

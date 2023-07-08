import { SUBSCRIPTION } from "@/assets/constants/recruit.ko.json";
import * as URLS from "@/assets/constants/url.ko.json";
import LinkTo from "@/components/common/Link.component";

const Subscription = () => {
  return (
    <div className="flex justify-between my-96">
      <h1 className="uppercase font-medium flex-1 mr-4">
        {SUBSCRIPTION.TITLE}
      </h1>
      <div className="flex-[2_1_0%]">
        <div className="flex w-full justify-between">
          {SUBSCRIPTION.CONTENTS.map((d, i) => (
            <div
              className="flex flex-col justify-between w-full h-80 px-8 min-w-[23rem] border-r border-black last:border-r-0 relative first:pl-0 last:pr-0 last:min-w-[20rem]"
              key={i}
            >
              <div className="text-3xl font-normal">{d.TITLE}</div>
              {d.LINK ? (
                <LinkTo
                  link={d.LINK}
                  className="flex items-center gap-4 absolute top-14"
                >
                  <img
                    className={`h-6 w-6`}
                    src="/right-arrow-circle.svg"
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
                <div className="font-semibold mb-4">
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

export default Subscription;

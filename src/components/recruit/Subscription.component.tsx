import strings from "@/assets/strings/recruit.ko.json";
import URLS from "@/assets/strings/url.ko.json";
import rightArrowCirle from "@/assets/right-arrow-circle.svg";
import { LinkTo } from "@/components/common";

const Subscription = () => {
  const data = strings.subscription;
  return (
    <div className="flex justify-between my-96">
      <h1 className="uppercase font-medium flex-1">{data.title}</h1>
      <div className="flex-[2_1_0%]">
        <div className="flex w-full justify-between">
          {data.contents.map((d, i) => (
            <div
              className="flex flex-col justify-between w-full h-80 px-8 min-w-[20.5rem] border-r border-black last:border-r-0 relative first:pl-0 last:pr-0 last:w-[80%]"
              key={i}
            >
              <div className="text-3xl font-normal">{d.title}</div>
              {d.link ? (
                <LinkTo
                  link={d.link}
                  className="flex items-center gap-4 absolute top-14"
                >
                  <img
                    className={`h-6 w-6`}
                    src={rightArrowCirle}
                    alt="right-arrow"
                  />
                  <span className="text-lg">
                    {URLS[d.link as keyof typeof URLS].text}
                  </span>
                </LinkTo>
              ) : (
                ""
              )}
              <div className="text-xl">
                <div className="font-semibold mb-4">
                  {d.content.split("\n").map((cd, ci) => (
                    <div key={ci}>{cd}</div>
                  ))}
                </div>
                <div>
                  {d.subcontent.split("\n").map((cd, ci) => (
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

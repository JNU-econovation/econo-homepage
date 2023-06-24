import strings from "@/assets/strings/recruit.ko.json";
import rightArrowCirle from "@/assets/right-arrow-circle.svg";
import { Link } from "react-router-dom";

const Subscription = () => {
  const data = strings.subscription;
  return (
    <div className="flex justify-between my-52">
      <h1 className="uppercase font-medium flex-1">{data.title}</h1>
      <div className="flex-[2_1_0%]">
        <div className="flex w-full justify-between">
          {data.contents.map((d, i) => (
            // TODO: 오늘쪽으로 배치 + min-width 설정
            <div
              className="flex flex-col justify-between w-full h-80 px-8 border-r border-black last:border-r-0 relative"
              key={i}
            >
              <div className="text-3xl font-normal">{d.title}</div>
              {d.link ? (
                <Link
                  to={d.link.link}
                  className="flex items-center gap-4 absolute top-14"
                >
                  <img
                    className={`h-6 w-`}
                    src={rightArrowCirle}
                    alt="right-arrow"
                  />
                  <span className="text-lg">{d.link.text}</span>
                </Link>
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

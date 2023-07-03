import strings from "@/assets/strings/recruit.ko.json";
import rightArrowCirleWhite from "@/assets/right-arrow-circle-white.svg";
import InputTextHover from "../common/InputTextHover.component";

const data = strings.waiting;
const Wating = ({
  scrollToRecruit,
  inputValue,
  inputOnChange,
}: {
  scrollToRecruit: () => void;
  inputValue: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col align-center justify-center text-2xl leading-relaxed text-center mb-60 h-screen">
      <div>
        <h1 className="text-[9.5rem] uppercase font-bold text-center my-8 leading-[9.5rem]">
          {data.title}
        </h1>
        {data.content.split("\n").map((d, i) => (
          <div key={i}>
            {strings.peroid + i}
            {d}
          </div>
        ))}
      </div>
      <InputTextHover
        onChange={inputOnChange}
        value={inputValue}
        className="my-52 text-2x"
        placeholder="econovation@gmail.com"
        label="이메일 입력하기"
      />
      {/* <input className="my-52 text-2xl" type="text" name="" id="" /> */}
      <div>
        <div className="text-[#565656] mb-20 text-base">
          *{data.email_alert}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="flex bg-[#0038FF] text-white px-6 py-3 gap-4 rounded-full text-xl items-center"
            onClick={scrollToRecruit}
          >
            <span>{data.view_button}</span>
            <img
              className="h-6 rotate-90"
              src={rightArrowCirleWhite}
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wating;

import { RECRUIT } from "@/src/assets/constants/recruit.ko";
import InputTextHover from "../common/InputTextHover.component";

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
          {RECRUIT.WAITING.TITLE}
        </h1>
        {RECRUIT.WAITING.CONTENT.split("\n").map((d, i) => (
          <div key={i}>
            {RECRUIT.PERIOD + i}
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
      <div>
        <div className="text-[#565656] mb-20 text-base">
          *{RECRUIT.WAITING.EMAIL_ALERT}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="flex bg-[#0038FF] text-white px-6 py-3 gap-4 rounded-full text-xl items-center"
            onClick={scrollToRecruit}
          >
            <span>{RECRUIT.WAITING.VIEW_BUTTON}</span>
            <img
              className="h-6 rotate-90"
              src="/icons/right-arrow-circle-white.svg"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wating;

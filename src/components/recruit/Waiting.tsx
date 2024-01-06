import { RECRUIT } from "@/src/constants/recruit/recruit.ko";
import { InputTextHover } from "../common/InputTextHover";
import { ChangeEvent, FormEvent } from "react";

export const Waiting = ({
  scrollToRecruit,
  inputValue,
  inputOnChange,
}: {
  scrollToRecruit: () => void;
  inputValue: string;
  inputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/recruit/subscribe", {
      method: "POST",
      body: JSON.stringify({ email: inputValue }),
    })
      .then((res) => {
        if (res.status === 200) {
          alert(RECRUIT.WAITING.ALERT_SUCCESS);
          inputOnChange({
            target: { value: "" },
          } as ChangeEvent<HTMLInputElement>);
        }
      })
      .catch((err) => {
        alert(RECRUIT.WAITING.ALERT_FAIL);
      });
  };

  return (
    <div className="flex flex-col align-center justify-center text-2xl leading-relaxed text-center mb-60 h-screen">
      <div>
        <h1 className="text-[9.5rem] uppercase font-bold text-center my-8 leading-[9.5rem]">
          {RECRUIT.WAITING.TITLE}
        </h1>
        {RECRUIT.WAITING.CONTENT.split("\n").map((d, i) => (
          <div key={i}>
            {RECRUIT.GENERTAION + i}
            {d}
          </div>
        ))}
      </div>
      <form className="my-40 text-2xl" onSubmit={onSubmit}>
        <InputTextHover
          onChange={inputOnChange}
          value={inputValue}
          placeholder="econovation@gmail.com"
          label={RECRUIT.WAITING.EMAIL_INPUT}
        />
        <button
          type="submit"
          className="text-lg mt-4 border text-[#0038FF] border-[#0038FF] rounded-full px-4 py-2"
        >
          {RECRUIT.WAITING.ALERT_BUTTON}
        </button>
      </form>
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

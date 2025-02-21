import {
  RECRUIT,
  type RecruitStatus,
} from "@/src/constants/recruit/recruit.ko";
import { InputTextHover } from "../common/InputTextHover";
import { ChangeEvent, FormEvent } from "react";

interface WaitingProps {
  scrollToRecruit: () => void;
  inputValue: string;
  recruitStatus: RecruitStatus;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Waiting = ({
  scrollToRecruit,
  inputValue,
  onInputChange,
  recruitStatus,
}: WaitingProps) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/recruit/subscribe", {
      method: "POST",
      body: JSON.stringify({ email: inputValue }),
    })
      .then((res) => {
        if (res.status === 200) {
          alert(RECRUIT.WAITING.ALERT_SUCCESS);
          onInputChange({
            target: { value: "" },
          } as ChangeEvent<HTMLInputElement>);
        }
      })
      .catch(() => {
        alert(RECRUIT.WAITING.ALERT_FAIL);
      });
  };

  return (
    <div className="align-center mb-60 flex h-screen flex-col justify-center text-center text-2xl leading-relaxed">
      <div>
        <h1 className="my-8 text-center text-[9.5rem] font-bold uppercase leading-[9.5rem]">
          {RECRUIT.WAITING.TITLE}
        </h1>
        {RECRUIT.WAITING.CONTENT.split("\n").map((d, i) => (
          <div key={i}>
            {RECRUIT.GENERATION + i - (recruitStatus === "READY" ? 1 : 0)}
            {d}
          </div>
        ))}
      </div>
      <form className="my-40 text-2xl" onSubmit={onSubmit}>
        <InputTextHover
          onChange={onInputChange}
          value={inputValue}
          placeholder="econovation@gmail.com"
          label={RECRUIT.WAITING.EMAIL_INPUT}
        />
        <button
          type="submit"
          className="mt-4 rounded-full border border-[#0038FF] px-4 py-2 text-lg text-[#0038FF]"
        >
          {RECRUIT.WAITING.ALERT_BUTTON}
        </button>
      </form>
      <div>
        <div className="mb-20 text-base text-[#565656]">
          *{RECRUIT.WAITING.EMAIL_ALERT}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="flex items-center gap-4 rounded-full bg-[#0038FF] px-6 py-3 text-xl text-white"
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

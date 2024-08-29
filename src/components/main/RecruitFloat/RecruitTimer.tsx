import Image from "next/image";
import { RECRUIT_FLOAT } from "../../../constants/recruit/recruit.ko";

interface RecruitTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const RecruitTimer = ({ days, hours, minutes, seconds }: RecruitTimerProps) => {
  return (
    <div className="flex gap-4">
      <div className="mr-4 flex flex-col items-center">
        <div className="text-3xl">{days}</div>
        <div className="text-[0.5rem] uppercase">{RECRUIT_FLOAT.DAY}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl opacity-90">{hours}</div>
        <div className="text-[0.5rem] uppercase">{RECRUIT_FLOAT.HOUR}</div>
      </div>
      <Image
        className="mb-4"
        src={require("/public/icons/colon.svg").default}
        alt="colon"
      />
      <div className="flex flex-col items-center">
        <div className="text-3xl opacity-90">{minutes}</div>
        <div className="text-[0.5rem] uppercase">{RECRUIT_FLOAT.MINUTE}</div>
      </div>
      <Image
        className="mb-4"
        src={require("/public/icons/colon.svg").default}
        alt="colon"
      />
      <div className="flex flex-col items-center">
        <div className="text-3xl opacity-90">{seconds}</div>
        <div className="text-[0.5rem] uppercase">{RECRUIT_FLOAT.SECOND}</div>
      </div>
    </div>
  );
};

export default RecruitTimer;

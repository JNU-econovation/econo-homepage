import {
  RECRUIT_FLOAT,
  type RecruitStatus,
} from "../../../constants/recruit/recruit.ko";

interface HoverTextProps {
  status: RecruitStatus;
  days?: number;
}

const HoverText = ({ status, days }: HoverTextProps) => {
  if (status === "READY")
    return (
      <span>
        {RECRUIT_FLOAT.ECONO_READY_FOR_RECRUIT} D-{days}
      </span>
    );
  else if (status === "OPEN")
    return <span>{RECRUIT_FLOAT.ECONO_IS_RECRUITING}</span>;
  else return <span></span>;
};

export default HoverText;

import {
  RECRUIT_FLOAT,
  type RecruitStatus,
} from "../../../constants/recruit/recruit.ko";

interface HoverTextProps {
  status: RecruitStatus;
  days?: number;
}

const HoverText = ({ status, days }: HoverTextProps) => {
  const hoverComponents = {
    READY: (
      <span>
        {RECRUIT_FLOAT.ECONO_READY_FOR_RECRUIT} D-{days}
      </span>
    ),
    OPEN: <span>{RECRUIT_FLOAT.ECONO_IS_RECRUITING}</span>,
    CLOSED: <span />,
  };
  return hoverComponents[status] ?? <span />;
};

export default HoverText;

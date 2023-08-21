const FIELDS = [
  "product manager",
  "product designer",
  "front-end",
  "back-end",
  "game",
  "ai",
];

const ECONOVATION = "econovation";

const JOBS = ["product manager", "product designer", "developer"];

const ABOUT = [
  {
    IMAGE: require("/public/home/head_1.png").default,
    TITLE: "dev",
    SUBTITLE: "about econovation",
    CONTENT:
      "매 학기 팀빌딩을 통해 여러 개의 팀을 구성한 후, 4개월간 프로젝트를 진행합니다. 이후 DEV에서 발표 및 부스 등의 다양한 형태로 프로젝트 성과를 선보입니다.",
  },
  {
    IMAGE: require("/public/home/head_2.png").default,
    TITLE: "mentoring",
    SUBTITLE: "about econovation",
    CONTENT:
      "각 분야에서 매칭된 멘토와 멘티가 주마다 한 번씩 미팅을 진행합니다. 멘토의 피드백을 통해 멘티가 성장할 수 있는 기회를 제공합니다.",
  },
  {
    IMAGE: require("/public/home/head_3.png").default,
    TITLE: "networking day",
    SUBTITLE: "about econovation",
    CONTENT:
      "서로 다른 분야의 팀들이 만나 네트워킹을 진행합니다. 프로젝트 진행 과정에서 겪는 문제와 고민을 함께 나누고 해결하는 시간을 통해 회원들 간에 결속력을 도모합니다.",
  },
  {
    IMAGE: require("/public/home/head_4.png").default,
    TITLE: "weekly presentation",
    SUBTITLE: "about econovation",
    CONTENT:
      "매주 금요일 오후 5 ~ 6시에 주간 발표를 진행합니다. 각 팀이 프로젝트를 진행하며 발생했던 이슈와 인상깊었던 기술을  발표하며 전반적인 프로젝트 진행 상황을 공유합니다.",
  },
];

const MISSION = [
  {
    TITLE: "passion",
    SUBTITLE: "개발, 발전을 향한 열정",
    CONTENT:
      "무언가를 열망하지 않으면 우리는 쉽게 지치기 마련입니다.\n열정은 그런 우리에게 중요한 동기가 될 수 있습니다.\n에코노베이션은 배움과 성장을 끊임없이 \n추구하는 사람들이 모인 커뮤니티입니다.",
  },
  {
    TITLE: "COMMUNICATION",
    SUBTITLE: "협업, 끊임 없는 소통",
    CONTENT:
      "에코노베이션은 혼자가 아닌 팀의 소중함과 시너지를 \n이해하며 끊임없이 소통하기 위해 노력합니다.회원들은 \n프로젝트를 통해 소통 능력을 기르고, 더 나아가 동아리 \n행사, 최종 발표 등에서 큰 무대에서 소통하는 능력을 기릅니다. ",
  },
  {
    TITLE: "FAITHFUL",
    SUBTITLE: "성실, 끈기있는 노력",
    CONTENT:
      "스스로 발전하기 위한 노력은 성장을 위한 시발점입니다.\n에코노베이션은 계획 뿐만 아니라 끈기 있는 노력을 통해 \n스스로 동기 부여합니다. 이를 통해 의미 있는 결실을 \n이끌어 낼 수 있도록 합니다.",
  },
];

export { FIELDS, JOBS, ECONOVATION, ABOUT };

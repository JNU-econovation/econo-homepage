const RECRUIT = {
  TITLE: "recruit",
  CONTENT:
    "에코노베이션에서 함께할 여러분을 모집합니다.\n에코노베이션은 지식의 선순환이 자연스럽게 이루어지는 환경을 만드는 것을 목표하고 있습니다.\n개발에 열정이 있다면 에코노베이션에 들어와 지식의 선순환을 일으켜주세요.",
  IS_ON: false,
  GENERTAION: 25,
  SCHEDULE: [
    { TEXT: "서류 접수 시작", DATE: "3/6" },
    { TEXT: "서류 접수 마감", DATE: "3/12" },
    { TEXT: "인터뷰 진행", DATE: "3/25 - 26" },
    { TEXT: "최종 합격 안내", DATE: "4/3" },
  ],
  WAITING: {
    TITLE: "comming soon",
    CONTENT:
      "기 모집이 마감되었습니다.\n기 모집이 시작될 때 메일로 알려드릴게요.",
    EMAIL_ALERT: "입력한 정보의 보유기간은 모집 알림 전송시까지 보관됩니다.",
    VIEW_BUTTON: "지난 모집 흁어보기",
    EMAIL_INPUT: "이메일을 입력하기",
    ALERT_BUTTON: "알람 신청하기",
    ALERT_SUCCESS: "알람 신청이 완료되었습니다.",
    ALERT_FAIL: "알 수 없는 오류입니다. 관리자에게 문의해주세요.",
  },
  FIELDS: {
    TITLE: "fields",
    TYPE: [
      {
        TITLE: "product manager",
        TITLE_KO: "기획자",
        CONTENT:
          "사용자 경험 향상을 위한 아이디어를 내고, 서비스를 기획합니다.\n 그리고 디자이너, 개발자와 소통해 서비스를 만듭니다. 일정 관리와 프로젝트 또한 PM의 역할입니다.",
      },
      {
        TITLE: "product designer",
        TITLE_KO: "디자이너",
        CONTENT:
          "아이디어를 구체화/시각화 하여, 필요한 디자인적 요소를 만듭니다.\n Figma, XD, Framer등을 활용하여 사용자 입장에서 서비스를 이해하고 사용할 수 있도록 고민합니다.",
      },
      {
        TITLE: "app",
        TITLE_KO: "앱",
        CONTENT:
          "안드로이드, IOS 등의 APP을 개발합니다.\nKotlin, Java, Swfit등을 사용하여 스마트폰에서 프로젝트가 동작할 수 있도록 구현합니다.",
      },
      {
        TITLE: "web",
        TITLE_KO: "웹",
        CONTENT:
          "Web과 관련된 프로젝트를 구현합니다.\nHTML/CSS, Javascript를 이용하여 GUI를 개발하고 사용자에게 화면을 보여줍니다.",
      },
      {
        TITLE: "server",
        TITLE_KO: "서버",
        CONTENT:
          "Spring등을 이용하여 프론트엔드와 데이터를 주고 받을 수 있는 API를 개발하고,\nDB를 설계하여 다양한 데이터를 저장합니다.",
      },
      {
        TITLE: "ai",
        TITLE_KO: "인공지능",
        CONTENT:
          "프로젝트에서 인공지능을 활용하는 부분을 맡아 개발합니다.\n주로 이미지처리, 자연어 처리, 추천 시스템 드의 기능을 구현합니다.",
      },
      {
        TITLE: "game",
        TITLE_KO: "게임",
        CONTENT:
          "C#, C++언어와 Unity, Unreal엔진을 활용하여 플레이어들의 재미를 느낄 수 있는 게임을 개발합니다.",
      },
    ],
  },
  SUBSCRIPTION: {
    TITLE: "subscription",
    CONTENTS: [
      {
        TITLE: "주간 발표 참석",
        LINK: "WEEK_ANOUNCE_REFERENCE",
        CONTENT:
          "에코노베이션 활동회원은 매주 금요일\n주간 발표에 필수로 참여해야 합니다.",
        SUBCONTENT:
          "주간 발표는 각 팀이 진행 상황을 발표하고\n프로젝트 간 겪었던 문제들을 공유합니다.",
      },
      {
        TITLE: "최종 발표 DEV",
        LINK: "LAST_ANOUNCE_VIDEO",
        CONTENT:
          "활동 회원은 1월, 7월에 진행하는\n최종발표인 DEV에 참여해야 합니다.",
        SUBCONTENT:
          "DEV는 공개적으로 진행되며\n한 학기동안 진행한 프로젝트를 발표합니다.",
      },
      {
        TITLE: "3학기 이상 활동",
        CONTENT:
          "에코노베이션은 3학기 이상 활동한\n회원들에게 수료 자격을 부여합니다.",
        SUBCONTENT:
          "단, 군 복무, 휴학 등 활동 할 수\n없는 경우 잠시 활동을 쉴 수 있습니다.",
      },
    ],
  },
};

const RECRUIT_FLOAT = {
  ECONO_IS_RECRUITING: "econovation은 지금 신입 모집 중!",
  ECONO_GENERTAION_RECRUIT_EN: `econovation ${RECRUIT.GENERTAION} GENERTAION recruit`,
  ECONO_GENERTAION_RECRUIT_KR: `에코노베이션 ${RECRUIT.GENERTAION}기 신입 모집`,
  DAY: "day",
  HOUR: "hour",
  MINUTE: "minute",
  SECOND: "second",
  RECRUIT_START_DATE: "2023-08-04",
};

export { RECRUIT, RECRUIT_FLOAT };

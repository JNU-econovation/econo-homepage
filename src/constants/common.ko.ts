import { PORTFOLIO_MENU } from "./portfolio/portfolio.ko";

const MAIN = {
  SUBTITLE: "coding connected",
};

const FOOTER = {
  TITLE: "contact us",
  CONTACT: [
    { NAME: "kakao", LINK: "KAKAO_LINK" },
    { NAME: "e-mail", LINK: "EMAIL_LINK" },
  ],
  SOCIAL: [
    { NAME: "instagram", LINK: "INSTAGRAM_LINK" },
    { NAME: "facebook", LINK: "FACEBOOK_LINK" },
    { NAME: "medium", LINK: "MEDIUM_LINK" },
    { NAME: "youtube", LINK: "YOUTUBE_LINK" },
  ],
  ADDRESS: {
    EN: "77. youngbong-ro, buk-gu, gangju, republic of korea",
    KO: "전남대학교 정보화본부 101호",
  },
  TO_TOP: "back to top",
  SPONSOR: [
    {
      IMAGE: require("/public/images/naverD2.png").default,
      ALT: "naverD2",
      HREF: "https://d2.naver.com/",
    },
    {
      IMAGE: require("/public/images/impact.campus.png").default,
      ALT: "impact campus",
      HREF: "https://impactcampus.campaignus.me/",
    },
    {
      IMAGE: require("/public/images/codeit.png").default,
      ALT: "codeit",
      HREF: "https://www.codeit.kr/",
    },
    {
      IMAGE: require("/public/images/sparta.png").default,
      ALT: "team sparta",
      HREF: "https://spartacodingclub.kr/",
    },
  ],
};

const HAMBGER_MENU = {
  CLOSE: "close",
  MENUS: [
    { NAME: "about", LINK: "HOME" },
    {
      NAME: "portfolio",
      LINK: "PORTFOLIO",
      CHILDREN: PORTFOLIO_MENU,
    },
    { NAME: "recruit", LINK: "RECRUIT" },
    { NAME: "contact", LINK: "CONTACT" },
  ],
};

const SERVICES = {
  ECONOVATION_DEV: {
    TITLE: "econovation dev",
    TITLE_KO: "지난 데브 다시보기",
    LINK: "PORTFOLIO_DEV",
  },
  ECONO_RECRUIT: {
    TITLE: "econo recruit",
    TITLE_KO: "에코노베이션 신입모집 TF",
    SUBTITLE: "member only",
    SUBTITLE_KO: "회원 전용 페이지",
    LINK: "ECONO_RECRUIT",
  },
  OTHER: [
    {
      TITLE: "econo beep",
      TITLE_KO: "기자재 대여 및 관리 시스템",
      LINK: "ECONO_BEEP",
    },
    {
      TITLE: "t-econo",
      TITLE_KO: "에코노베이션 테크 블로그",
      LINK: "T_ECONO",
    },
  ],
};

export { MAIN, FOOTER, HAMBGER_MENU, SERVICES };

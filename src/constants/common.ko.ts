import { PORTFOLIO_MENU } from "./portfolio/portfolio.ko";
import { URLS } from "./url.ko";

const MAIN = {
  SUBTITLE: "coding connected",
};

const FOOTER = {
  TITLE: "contact us",
  CONTACT: [
    { NAME: "kakao", LINK: "KAKAO_LINK" },
    { NAME: "e-mail", LINK: "EMAIL_LINK" },
  ] as { NAME: string; LINK: keyof typeof URLS }[],
  SOCIAL: [
    { NAME: "instagram", LINK: "INSTAGRAM_LINK" },
    { NAME: "facebook", LINK: "FACEBOOK_LINK" },
    { NAME: "medium", LINK: "MEDIUM_LINK" },
    { NAME: "youtube", LINK: "YOUTUBE_LINK" },
  ] as { NAME: string; LINK: keyof typeof URLS }[],
  ADDRESS: {
    EN: "77. youngbong-ro, buk-gu, gwangju, republic of korea",
    KO: "전남대학교 정보화본부 101호",
  },
  TO_TOP: "back to top",
  SPONSOR: [
    {
      IMAGE: require("/public/images/codeit.png").default,
      ALT: "codeit",
      HREF: "https://www.codeit.kr/",
    },
    {
      IMAGE: require("/public/images/sojoong.png").default,
      ALT: "sojoong",
      HREF: "https://sojoong.kr/",
    },
    {
      IMAGE: require("/public/images/informationCenter.png").default,
      ALT: "informationCenter",
      HREF: "https://ucc.jnu.ac.kr/ucc/index.do",
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
  ] as {
    NAME: string;
    LINK: keyof typeof URLS;
    CHILDREN?: { NAME: string; LINK: keyof typeof URLS }[];
  }[],
};

const SERVICES = {
  ECONOVATION_DEV: {
    TITLE: "econovation dev",
    TITLE_KO: "지난 데브 다시보기",
    LINK: "PORTFOLIO_DEV" as keyof typeof URLS,
  },
  ECONO_RECRUIT: {
    TITLE: "econo recruit",
    TITLE_KO: "에코노베이션 신입모집 TF",
    SUBTITLE: "member only",
    SUBTITLE_KO: "회원 전용 페이지",
    LINK: "ECONO_RECRUIT" as keyof typeof URLS,
  },
  OTHER: [
    {
      TITLE: "EEOS",
      TITLE_KO: "에코노베이션 행사 관리 시스템",
      LINK: "EEOS" as keyof typeof URLS,
    },
  ],
};

export { MAIN, FOOTER, HAMBGER_MENU, SERVICES };

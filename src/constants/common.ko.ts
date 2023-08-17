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

export { MAIN, FOOTER, HAMBGER_MENU };

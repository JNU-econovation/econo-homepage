import { URLS } from "../url.ko";
import { winter2020 } from "./ko/2019-2";
import { summer2020 } from "./ko/2020-1";
import { winter2021 } from "./ko/2020-2";
import { summer2021 } from "./ko/2021-1";
import { winter2022 } from "./ko/2021-2";
import { summer2022 } from "./ko/2022-1";
import { winter2023 } from "./ko/2022-2";
import { summer2023 } from "./ko/2023-1";
import { winter2024 } from "./ko/2023-2";
import { summer2024 } from "./ko/2024-1";
import { winter2025 } from "./ko/2024-2";

const PORTFOLIO = {
  TITLE: "portfolio",
  DATA: [
    ...winter2025,
    ...summer2024,
    ...winter2024,
    ...summer2023,
    ...winter2023,
    ...summer2022,
    ...winter2022,
    ...summer2021,
    ...winter2021,
    ...summer2020,
    ...winter2020,
  ],
};

interface PortfolioMenuType {
  NAME: string;
  LINK: keyof typeof URLS;
}

const PORTFOLIO_MENU: PortfolioMenuType[] = [
  { NAME: "DEV", LINK: "PORTFOLIO_DEV" },
  { NAME: "HACKATHON", LINK: "PORTFOLIO_HACKATHON" },
  { NAME: "SERVICE", LINK: "PORTFOLIO_SERVICE" },
];

export { PORTFOLIO, PORTFOLIO_MENU };

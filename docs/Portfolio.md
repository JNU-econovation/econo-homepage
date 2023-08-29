# Portfolio

[포트폴리오](https://econovation.kr/portfolio/dev)를 수정하는 페이지입니다.  
파일 구조에 따라서 화면의 구성이 달라집니다.  
예를 들어 PORTFOLIO에서 다음과 같은 형태로 하나가 더 추가되면 화면에서도 같이 추가 됩니다.

## 파일 구조는 다음과 같습니다.

1. portfolio.ko.ts

```ts
const PORTFOLIO = {
  TITLE: string,
  DATA:     {
      TITLE: string,
      SUBTITLE: string, // 한줄 설명입니다.
      TEAM_NAME: string, // 팀 이름입니다.
      PEOPLE: string, // 팀원 입니다.
      IDEA: string, // 아이디어에 대한 설명입니다.
      SKILLS: string, // 사용한 기술에 대한 설명입니다.
      BG_IMAGE: require("path/to/image.png").default, // 배경 이미지입니다
      YEAR: string, // 프로젝트를 진행한 년도입니다. "2023-1"
      LINKS: {
        TITLE: string, // 링크 설명합니다.
        LINK: string, // 링크입니다.
      }[] | null,
      INTRODUCTION: {
          TYPE: "image" | "video", // 소개를 하기 위한 이미지 또는 영상입니다.
          LINK: require("path/to/image.png").default | string, // 소개하기 위한 이미지입니다. (1개라면 들어가지 않습니다.), 영상은 url string으로 넣으시면 됩니다. ("https://youtube.com/embed/example")
        }[],
    }[],
};

const PORTFOLIO_MENU = [
  { NAME: "DEV", LINK: "PORTFOLIO_DEV" },
  { NAME: "HACKATHON", LINK: "PORTFOLIO_HACKATHON" },
  { NAME: "SERVICE", LINK: "PORTFOLIO_SERVICE" },
]; // 바꾸지 않는게 좋습니다. 위에 navbar를 표시하기 위한 것입니다.
```

2. hackathon.ko.ts

```ts
const HACKATHON_POSTER = {
    NAME: string, // 이미지를 설명하는 글입니다.
    LINK: require("path/to/image.png").default, // 해커톤 포스터 이미지입니다.
  }[]
```

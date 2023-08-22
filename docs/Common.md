# Common

[일반적인 값들을](https://econovation.kr/)를 수정하는 페이지입니다.

## 파일 구조는 다음과 같습니다.

```ts
const MAIN = { SUBTITLE: string };

const FOOTER = {
  TITLE: string,
  CONTACT: {
    NAME: string, // 보여질 내용입니다.
    LINK: string, // url.ko.ts에서 다룰 링크입니다.
  }[],
  ADDRESS: {
    EN: string, // 영문 주소입니다.
    KO: string, // 한글 주소입니다.
  },
  TO_TOP: string, // 위로가기 글자입니다.
  SPONSOR: {
    IMAGE: require('path/to/image.png').default, // 스폰서 이미지입니다.
    ALT: string, // 이미지를 설명하는 글입니다.
    HREF: string // 주소입니다.
  }[],
};

const HAMBER_MENU = {
  CLOSE: string, // close string 값입니다.
  MENUES: {
    NAME: string, // menu에서 string을 관리하는 부분입니다.
    LINK: string, // Url에 있는 값을 작성해야합니다.
    CHILDREN: {
      NAME: string, // 위와 같습니다.
      LINKL: string, // 위와 같습니다.
    }[] | null
  }[]
}

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
  }, // 여기까지는 변경사항이 있지 않는 이상 두면 됩니다.
  OTHER: {
    TITLE: string, // 제목입니다.
    TITLE_KO: string, // 한국어로 된 제목입니다(hover 되면 변경 되는 곳입니다)
    LINK: stirng, // url.ko.ts안에 있는 key값으로 설정해야 합니다.
  }[]
}
```

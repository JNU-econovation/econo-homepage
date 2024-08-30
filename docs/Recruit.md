# Recruit

[포트폴리오](https://econovation.kr/recruit)를 수정하는 페이지입니다.  
파일 구조에 따라서 화면의 구성이 달라집니다.

## 파일 구조는 다음과 같습니다.

1. faq.ko.ts

각 배열은 자유롭게 추가할 수 있습니다. 또한 질문의 개수에 구애받지 않습니다.

```ts
const FAQ = {
  TYPE: string, // FAQ에 대한 구분자입니다.
  TITLE: string, // FAQ를 아우르는 타이틀입니다.
  DATA: {
    Q: string, // 질문입니다.
    A: string, // 답변입니다.
  }[]
}[]
```

2. recruit.ko.ts

string의 값들을 관리하기 위해서 모아두었습니다.  
안에 소개 글을 바꾸고 싶다면 여기 있는 내용을 바꾸면 됩니다.

### IS_ON (Deprecated 됨)

~~IS_ON은 전역적으로 영향을 받으며 true는 리크루트를 하고 있는 상태, false는 리크루트를 하지 않는 상태입니다.  
true일때는 메인 페이지 하단에 날자가 쓰여집니다. false일때 리크루트 구독 페이지가 활성화 됩니다.~~

IS_ON 속성은 Deprecated 되었습니다. 그 이유는 다음과 같습니다.

- 관리자가 수동으로 상태를 변경해주어야 합니다. 그러므로 번거롭습니다.
- 아직 신입모집을 하고 있는 상태는 아니지만 준비된 상태를 나타내기 힘듭니다. 즉, READY | OPEN | CLOSED 의 상태가 필요합니다.

### START_DATE, END_DATE

위의 `IS_ON`이 해결하지 못하는 문제를 해결하기 위해 두가지 속성과 한 가지 훅으로 관리합니다.
이 섹션에서는 두가지 속성에 대해 설명합니다.

**START_DATE**

신입모집을 모집을 시작하는 UTC 시간을 나타냅니다.

**END_DATE**

신입모집의 마감하는 UTC 시간을 나타냅니다.

> ⚠️ 반드시 신입모집 시작 일주일 전에는 해당 값과 기수 값을 바꿔주어야 합니다.

우리는 이제 두 값만 설정해둔다면, 쉽게 상태를 얻을 수 있습니다. 이는 `useRecruitStatus()`훅을 통해 구현합니다.

### useRecruitStatus()

hook을 사용하기 전에, 이를 가정합니다.

- `START_DATE` 는 항상 `END_DATE`보다 이른 시간이어야 합니다.
- 두 속성은 항상 UTC로 정의 되어야 합니다.

훅은 다음과 같이 동작합나다.

- 만약 현재 시간이 `START_DATE`보다 이전이면, 훅은 `READY`를 반환합니다.
- 만약 현재 시간이 `START_DATE`와 `END_DATE` 사이 이면, 상태는 `OPEN`을 반환합니다.
- 만약 현재 시간이 `END_DATE`이후면, 훅은 `CLOSED`를 반환합니다.

#### how to use

```ts
const { recruitStatus } = useRecruitStatus();
```

GENERATION은 해당 진행되는 기수입니다. 2023년도 1학기 기준 25기를 모집하였습니다.

```ts
const RECRUIT = {
  TITLE: "recruit", // recruit string 입니다.
  CONTENT: string, // recruit에 대한 소개입니다.
  IS_ON: boolean, // DEPRECATED: 리크루트의 진행 상황에 대해 나타냅니다.
  START_DATE: Date, // 신입모집 시작 시간을 UTC로 표현합니다.
  END_DATE: Date, // 신입모집 서류 마감 시간을 UTC로 표현합니다.
  GENERATION: number, // 해당 기수에 대해서 입니다.
  SCHEDULE: { // 4개면 가장 좋습니다.
    TEXT: string, // 스케줄에 대해서 설명하는 string 입니다.
    DATE: string, //스케쥴이 언제까지 인지 설명하는 string 입니다. 추후 RECRUIT_FLOAT도 변경해야 합니다.
  }[],
  WATING: { // RecruitStatus가 OPEN이 아닐 때 나타나는 정보들 입니다.
    TITLE: "comming soon", // warting string 입니다.
    CONTENT: string, // 마감되었다는 글입니다. \n으로 띄어쓰기를 할 수 있습니다.
    EMAIL_ALERT: string, // email로 받을 때 소개 글입니다.  "입력한 정보의 보유기간은 모집 알림 전송시까지 보관됩니다.",
    VIEW_BUTTON: string, // 스크롤 내릴 때 버튼에 들어갈 string 입니다.
    ALERT: string, // 구독 버튼 입니다.
    ALERT_SUCCESS: string, // 서버에 신호를 보낸 이후 성공하면 나오는 alert string 입니다.
    ALERT_FAIL: string, // 서버에 신호를 보낸 이후 실패하면 나오는 alert string입니다.
  },
  FIELDS: { // 운영중인 분야에 대해서 설명하는 곳입니다.
    TITLE: "fields",
    TYPE: {
      TITLE: string, // 제목
      TITLE_KO: stirng, // 제목 한국어 버전입니다.
      CONTENT: string, // 분야에 대해서 설명한 글입니다. \n으로 띄어쓰기를 할 수 있습니다.
    }[]
  },
  SUBSCRIPTION: {
    TITLE: "subscription",
    CONTENTS: {
      TITLE: string,
      LINK: string, // url.ko.ts 안에 있는 key로 설정해야합니다.
      CONTENT: string, // 소개부분입니다. (두꺼운 글입니다.)
      SUBCONTENT: string // 소개부분입니다. (보통 두께의 글입니다.)
    }[]
  }
}

const RECRUIT_FLOAT = { // 메인페이지에 뜨는 부분입니다.
  ECONO_IS_RECRUITING: "econovation은 지금 신입 모집 중!", // 리쿠루팅에 관한 소개 내용입니다.
  ECONO_GENERTAION_RECRUIT_EN: `econovation ${RECRUIT.GENERTAION} generation recruit`, // 영어 소개 입니다.
  ECONO_GENERTAION_RECRUIT_KR: `에코노베이션 ${RECRUIT.GENERTAION}기 신입 모집`, // 한글 소개 입니다.
  DAY: "day",
  HOUR: "hour",
  MINUTE: "minute",
  SECOND: "second",
};
```

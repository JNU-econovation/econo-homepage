export const winter2022 = [
  {
    TITLE: "AI COMPETITION",
    SUBTITLE:
      "OTTO(Kaggle)에서 주최한 추천시스템 대회를 한 한기동안 진행했습니다.",
    TEAM_NAME: "개굴",
    PEOPLE: "김건형, 이규민, 이도연",
    IDEA: '추천 시스템에는 크게 컨텐츠 기반 필터링, 협업 필터링, 하이브리드 3가지로 나누어 볼 수 있습니다. 그중 저희 팀은 대회 측에서 제공받은 Implicit Data를 효율적으로 운용할 수 있는 협업 필터링을 사용하였습니다.\n협업 필터링은 비슷한 취향을 갖은 사용자가 좋아한 아이템을 사용자에게 추천하는 방법입니다. 협업 필터링은 "나와 비슷한 취향을 갖은 사람은 나와 비슷한 평가를 내릴거야. 나는 아직 구매하지 않았지만 다른 사람이 구매한 상품을 나도 갖고 싶을거야!" 라는 가정에서 시작합니다\nImplicit Data란 사용자가 간접적으로 표현된 선호도, 취향을 나타내는 데이터(예를 들어, 사용자 행동 로그 데이터, 검색 기록, 클릭 기록, 방문 페이지, 구매 내역)를 의미합니다.',
    SKILLS:
      "개굴팀은 프로젝트를 진행하면서 크게 2가지의 기술을 사용했습니다.\n첫번째는 recommand system에서 사용되는 rerank, co-visitation, baseline 등에 대한 것입니다.\n개굴팀은 이러한 기술을 이용하여 코드를 만들었고 pandas, cudf, polars등의 파이썬 라이브러리를 이용하여 방대한 데이터의 처리를 하였습니다.\n이렇게 만들어진 데이터는 제출되어서 각각이 0.45~0.57의 정확도를 보였습니다.\n두번째는 성능 향상에 항상 큰 도움을 주는 model ensemble입니다.\nensemble이란 여러 모델로 만들어진 각각의 데이터를 합쳐서 더 좋은 결과의 데이터를 얻는 방법입니다.\nensemble을 통해 만들어진 데이터는 제출되어서 0.578의 정확도를 얻는 쾌거를 얻기도 하였습니다.",
    BG_IMAGE: require("/public/dev/2023_winter_dev/portfolio/kaggle.png")
      .default,
    YEAR: "2022-2",
    LINKS: null,
    INTRODUCTION: [
      {
        TYPE: "image",
        LINK: require("/public/dev/2023_winter_dev/portfolio/kaggle.png")
          .default,
      },
    ],
  },
  {
    TITLE: "모여봐요 에코노 숲",
    SUBTITLE: "와이파이를 기반으로 동아리 방 현황을 나타내는 웹 페이지",
    TEAM_NAME: "에코노 숲 주민들",
    PEOPLE: "경주원, 김수민, 김정은, 김종준, 김현지",
    IDEA: "번거롭게 동아리 방에 누구 있어? 질문할 필요 없이 실시간으로 동아리 방 상태를 알 수 있는 웹 페이지입니다. 또한 밥 약속을 잡는 플랫폼을 제공해 동아리원끼리 유대감을 형성할 수 있습니다. 펜데믹 이후 모든 스터디와 회의가 대면으로 진행되면서 붐비는 동아리 방을 보고 돌아가는 경우를 방지하고자, 동아리 방에서 언제 대면 모임이 진행되는지 켈린더를 통해 알 수 있습니다.",
    SKILLS:
      "프론트엔드는 React를 기반으로 웹 어플리케이션을 개발했습니다. 효과적으로 재사용 가능한 컴포넌트를 사용하고, 전역 상태관리 라이브리러인 recoil을 도입했습니다.\n백엔드는 Spring Boot와 SpringDataJPA를 이용하여 웹 어플리케이션을 개발하였습니다. 또한, 서비스 간의 의존성을 줄이기 위해 Spring event를 사용하였습니다.\n동방현황의 경우 모든 웹 페이지에서 사용되는 API기에 nGrinder를 활용하여 응답 속도까지 고려한 개발을 진행하였습니다.",
    BG_IMAGE: require("/public/dev/2023_winter_dev/portfolio/moesup.png")
      .default,
    YEAR: "2022-2",
    LINKS: null,
    INTRODUCTION: [
      {
        TYPE: "image",
        LINK: require("/public/dev/2023_winter_dev/portfolio/moesup.png")
          .default,
      },
    ],
  },
  {
    TITLE: "Date.now()",
    SUBTITLE: "나만의 데이트 코스를 공유하는 데이트 코스 커뮤니티",
    TEAM_NAME: "에코노 응애들",
    PEOPLE: "김가연, 박영규, 이승건",
    IDEA: "Date.now()는 연인들간에 한번쯤은 고민해봤을 법한 늘 똑같은 영화관, 식당, 카페가 아닌 색다른 데이트코스는 없을까라는 고민에서부터 시작한 웹 서비스입니다. 여러분들이 숨겨진 좋은 데이트코스를 알고 계시다면 게시글을 등록해보세요. 대한민국 어디선가 귀여운 커플들이 며칠간 끙끙 거리던 문제를 단숨에 해결시켜줄 수 있으니깐요! 혹시 당신이 데이트 코스로 끙끙 알고 있는 커플인가요?? 걱정하세요@ Date.now()는 데이트 예상 비용, 위치, 데이트코스에 대한 평가 등 여러분이 찾던 모든 것을 제공하니까요!!",
    SKILLS:
      "프론트엔드는 html, css, Vanilla JS를 이용했고 디자인 부분은 Figma를 이용해 작업했습니다.\n백엔드는 SpringBoot와 SpringDataJPA를 이용하여 웹 어플리케이션을 개발하였고, REST API Server를 구축하였습니다. JWT Token을 사용하기 위하여 Spring security를 사용했으며, 배포는 클라우드 타입을 이용했습니다.",
    BG_IMAGE: require("/public/dev/2023_winter_dev/portfolio/dateNow.jpg")
      .default,
    YEAR: "2022-2",
    LINKS: null,
    INTRODUCTION: [
      {
        TYPE: "image",
        LINK: require("/public/dev/2023_winter_dev/portfolio/dateNow.jpg")
          .default,
      },
    ],
  },
  {
    TITLE: "긱허브",
    SUBTITLE: "기숙사 라이프의 필수 커뮤니티, 긱허브",
    TEAM_NAME: "머지요정",
    PEOPLE: "김지민, 조배경",
    IDEA: "기숙사 생활에 포커싱된 커뮤니티가 있었으면 좋겠다라는 생각에서 출발했습니다. 긱허브는 기본적인 게시판 기능을 통해 기숙사생들 간의 커뮤니케이션을 돕습니다. 뿐만 아니라, 구매자들간의 공동 배송/배달 시킬 수 있는 ‘같이 사요/먹어요 방’ 기능을 제공하여 기숙사생이 느끼는 최소 주문 금액에 대한 부담을 해소하고 배달비 절약을 가능하게 합니다.",
    SKILLS:
      "프론트엔드는 Android Studio에서 Kotlin을 사용하여 개발하였고, 백엔드는 Spring Boot와 Spring Data JPA를 이용하여 앱을 개발하였습니다. 데이터베이스로는 h2를 사용하였습니다.\n프론트과 백 통신에는 Http 통신 라이브러리 레트로핏을 이용하였습니다.",
    BG_IMAGE: require("/public/dev/2023_winter_dev/portfolio/gikhub.png")
      .default,
    YEAR: "2022-2",
    LINKS: null,
    INTRODUCTION: [
      {
        TYPE: "image",
        LINK: require("/public/dev/2023_winter_dev/portfolio/gikhub.png")
          .default,
      },
    ],
  },
  {
    TITLE: "Sleeper",
    SUBTITLE: "20대 대학생을 위한 규칙적인 수면관리 어플리케이션",
    TEAM_NAME: "복덩이",
    PEOPLE: "이시현, 임수미, 장현지, 황대선",
    IDEA: "Sleeper는 불규칙한 수면 패턴을 가진 20대 대학생이 효율적이고 규칙적인 수면을 할 수 있도록 돕습니다. 규칙적인 수면은 신체적, 정신적으로 굉장히 중요하지만, 대학생들은 불규칙한 생활 패턴으로 매일 다른 시간에 수면을 취하거나, 권장 수면 시간보다 적게 수면을 취합니다. Sleeper는 규칙적인 수면을 통해 사용자에게 더 나은 내일을 살아갈 수 있는 원동력을 제공합니다.\n사용자가 규칙적인 수면을 취했을 때 캐릭터가 성장해 규칙적인 수면을 유도합니다. 잠들기 전 하루 감사일기로 하루동안 좋았던 일을 생각하며 스트레스를 잊도록 합니다. 바빠서 잠을 못자는 사람들에게는 수면 사이클 시간 계산으로 적게 자더라도 효율적인 수면을 취할 수 있도록 돕습니다.",
    SKILLS:
      "Sleeper는 Android Studio에서 NullPointerException의 발생 가능성을 줄이기 위해 Kotlin을 사용하여 앱을 개발하였습니다. 또한 Http 통신을 구현하기 위해 속도, 편의성, 가독성이 장점인 Retrofit 라이브러리를 이용하였습니다\nServer는 SpringBoot와 Spring Web MVC 그리고 JPA를 이용하여 앱을 개발하였습니다. 또한, Jwt를 이용하여 로그인 기능을 구현하였고, 데이터베이스는 관계형 데이터베이스 mysql을 사용하였습니다.",
    BG_IMAGE: require("/public/dev/2023_winter_dev/portfolio/Sleeper.jpg")
      .default,
    YEAR: "2022-2",
    LINKS: null,
    INTRODUCTION: [
      {
        TYPE: "image",
        LINK: require("/public/dev/2023_winter_dev/portfolio/Sleeper.jpg")
          .default,
      },
    ],
  },
  {
    TITLE: "The Econo",
    SUBTITLE:
      "에코노베이션 통합 로그인 서비스 및 홈페이지와 동아리 활동에 필요한 다양한 서비스",
    TEAM_NAME: "스리남",
    PEOPLE: "권순찬, 이서현, 이윤성, 임채승",
    IDEA: "에코노베이션 통합 로그인 서비스 및 홈페이지와 동아리 활동에 필요한 다양한 서비스",
    SKILLS:
      "IDP\n다중 라우팅 기술로 같은 요청에도 로그인 유무, 관리 권한 유무에 따라 커스텀된 로그인, 로그아웃, 회원 관리 서비스를 에코노베이션의 다양한 프로젝트에 제공합니다. 또한 기존의 토큰 기반 인증의 보안 문제를 state관리를 통해 해결하여 더 안전한 인증 서비스를 사용할 수 있습니다.\n홈페이지\n오래된 웹사이트를 트렌드 디자인을 반영해 리뉴얼 합니다. React와 react-icons을 활용해 사용자 UI편의성을 늘리고 프로젝트 내 라우팅을 위해 react router를 사용하였습니다. 빠르고 효율적인 패키지 매니징을 위한 pnpm을 도입했습니다.",
    BG_IMAGE: require("/public/dev/2023_winter_dev/portfolio/theEcono.png")
      .default,
    YEAR: "2022-2",
    LINKS: null,
    INTRODUCTION: [
      {
        TYPE: "image",
        LINK: require("/public/dev/2023_winter_dev/portfolio/theEcono.png")
          .default,
      },
    ],
  },
];

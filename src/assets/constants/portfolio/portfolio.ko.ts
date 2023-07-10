const PORTFOLIO = {
  TITLE: "portfolio",
  DATA: [
    {
      TITLE: "AI COMPOETITION",
      SUBTITLE:
        "OTTO(Kaggle)에서 주최한 추천시스템 대회를 한 한기동안 진행했습니다.",
      TEAM_NAME: "개굴",
      PEOPLE: "김건형, 이규민, 이도연",
      IDEA: '추천 시스템에는 크게 컨텐츠 기반 필터링, 협업 필터링, 하이브리드 3가지로 나누어 볼 수 있습니다. 그 중 저희팀은 대회측에서 제공받은 Implicit Data를 효율적으로 운용할 수 있는 협업 필터링을 사용하였습니다.\n협업 필터링은 비슷한 취향을 갖은 사용자가 좋아한 아이템을 사용자에게 추천하는 방법입니다. 협업 필터링은 "나와 비슷한 취향을 갖은 사람은 나와 비슷한 평가를 내릴거야. 나는 아직 구매하지 않았지만 다른 사람이 구매한 상품을 나도 갖고 싶을거야!" 라는 가정에서 시작합니다\nImplicit Data란 사용자가 간접적으로 표현된 선호도, 취향을 나타내는 데이터(예를 들어, 사용자ㅏ 행동 로그 데이터, 검색 기록, 클릭 기록, 방문 페이지, 구매 내역)를 의미합니다.',
      SKILLS:
        "개굴팀은 프로젝트를 진행하면서 크게 2가지의 기술을 사용했습니다.\n첫번째는 recommand system에서 사용되는 rerank, co-visitation, baseline 등에 대한 것입니다.\n개굴팀은 이러한 기술을 이용하여 코드를 만들었고 pandas, cudf, polars등의 파이썬 라이브러리를 이용하여 방대한 데이터의 처리를 하였습니다.\n이렇게 만들어진 데이터는 제출되어서 각각이 0.45~0.57의 정확도를 보였습니다.\n두번째는 성능 향상에 항상 큰 도움을 주는 model ensemble입니다.\nensemble이란 여러 모델로 만들어진 각각의 데이터를 합쳐서 더 좋은 결과의 데이터를 얻는 방법입니다.\nensemble을 통해 만들어진 데이터는 제출되어서 0.578의 정확도를 얻는 쾌거를 얻기도 하였습니다.",
      BG_IMAGE: "/dev/2023_winter_dev/portfolio/kaggle.png",
      YEAR: "2022-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2023_winter_dev/portfolio/kaggle.png",
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
      BG_IMAGE: "/dev/2023_winter_dev/portfolio/moesup.png",
      YEAR: "2022-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2023_winter_dev/portfolio/moesup.png",
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
      BG_IMAGE: "/dev/2023_winter_dev/portfolio/dateNow.jpg",
      YEAR: "2022-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2023_winter_dev/portfolio/dateNow.jpg",
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
      BG_IMAGE: "/dev/2023_winter_dev/portfolio/gikhub.png",
      YEAR: "2022-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2023_winter_dev/portfolio/gikhub.png",
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
      BG_IMAGE: "/dev/2023_winter_dev/portfolio/Sleeper.png",
      YEAR: "2022-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2023_winter_dev/portfolio/Sleeper.png",
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
      BG_IMAGE: "/dev/2023_winter_dev/portfolio/theEcono.png",
      YEAR: "2022-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2023_winter_dev/portfolio/theEcono.png",
        },
      ],
    },
    {
      TITLE: "별을 찾아서",
      SUBTITLE: "준비완료. 포링 나와라, 샤샤!",
      TEAM_NAME: "썬ing",
      PEOPLE: "박수현",
      IDEA: "지구로부터 22만 광년 떨어진 곳에 위치한 '몬' 행성의 최고 항공우주국 ‘샤샤’. 그들은 새로운 가족을 찾기 위해 우주인 포링과 노이에게 임무를 내리는데…. 귀여움 한 스푼, 우주 한 스푼, 재미 한 스푼. 썬ing의 취향이 잔뜩 들어간 게임.",
      SKILLS:
        "C# 기반으로 유니티 엔진을 이용해 개발했습니다. Aesprite와 Piskel로 그래픽 작업을 진행했습니다.",
      BG_IMAGE: "/dev/2022_summer_dev/portfolio/findStar.png",
      YEAR: "2022-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_summer_dev/portfolio/findStar.png",
        },
      ],
    },
    {
      TITLE: "헬퍼",
      SUBTITLE:
        "정확한 홈트레이닝의 시작 어디서든 만날 수 있는 내 손안의 운동 도우미",
      TEAM_NAME: "Healper",
      PEOPLE: "이도연, 이규민",
      IDEA: "개인적 사유로 헬스장에 가기 어려운 사람, 비싼 PT 비용이 부담되는 사람, 등등 다양한 사람들에게 핸드폰이나, 노트북 웹캠 등 카메라 하나만으로 홈 트레이닝에 도움이 되고자 시작하게 되었습니다.",
      SKILLS:
        "Object Dection 모델 YOLO와 Pose Estimation 모델 HRNet를 사용하여, 관절을 예측 및 분류하고, 운동 중 사람의 신체의 각도를 이용하여 프로젝트를 구현하였습니다.",
      BG_IMAGE: "/dev/2022_summer_dev/portfolio/healper.png",
      YEAR: "2022-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_summer_dev/portfolio/healper.png",
        },
      ],
    },
    {
      TITLE: "친해지길 바라",
      SUBTITLE: "당신의 아이스브레이킹을 위한 웹사이트",
      TEAM_NAME: "어사",
      PEOPLE: "김지민, 조배경",
      IDEA: "'친해지길 바라'는 사람들과의 아이스브레이킹을 돕는 웹 사이트입니다. mbti 퀴즈를 통하여 서로의 성격유형을 파악할 수 있게 하고, 각종 게임과 퀴즈들을 통하여 본격적인 아이스브레이킹을 진행하는 사이트입니다. 새로운 사람들과의 만남, 각종 행사나 수업 등에서 친해지길 바라를 사용해 보세요. 쉽고 빠른 아이스브레이킹을 경험해 보세요!",
      SKILLS:
        "프론트엔드는 HTML과 CSS, Javascript를 사용하였고, 퀴즈와 게임을 구현하는 과정에서 데이터 전달 방식으로 SSR 방식을 채택하여 진행했습니다. 백엔드는 NodeJS를 사용하였고 ORM인 seqeulize를 이용하여 데이터베이스인 MySQL를 사용, 웹 사이트를 개발하였습니다. 디자인은 피그마를 통하여 와이어 프레임을 구성한 후, 이를 바탕으로 구현했습니다.",
      BG_IMAGE: "/dev/2022_summer_dev/portfolio/makefriendly.png",
      YEAR: "2022-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_summer_dev/portfolio/makefriendly.png",
        },
      ],
    },
    {
      TITLE: "econoBeep",
      SUBTITLE: "관리부의 디지털화와 에코노 유니버스 서비스를 위한 초석",
      TEAM_NAME: "정아진과 관리부",
      PEOPLE: "정아진, 권순찬, 경주원",
      IDEA: "에코노베이션의 관리부는 동아리의 비품을 관리 및 대여/반납 서비스를 제공합니다. 기존의 엑셀 기반 관리에서 벗어나 비품 목록, 상태, 대여 기록 등을 조회할 수 있고, 비품에 부착된 QR코드를 스캔을 통해 대여 및 반납 가능하며, 에코노 관리부가 비품을 손쉽게 추가 및 수정할 수 있는 웹 페이지를 만들고자 했습니다. 관리부원이 변경되더라도 유지보수할 수 있도록 높은 커버리지의 테스트 코드와 클린 코드를 작성하였습니다.",
      SKILLS:
        "웹은 React로 개발했습니다. 디자인 및 css 스타일링을 위해 Mui와 Styled-component를, 서버와의 연결을 위해 axios를 사용했습니다. 서버는 SpringBoot2로 개발했습니다. 효율적인 쿼리 작성을 위해 QueryDSL을, 단위 테스트 작성을 위해 Junit4, Mockito를 사용했고, API document 작성 자동화를 위해 Swagger, CI/CD를 위해 Jenkins를 도입했습니다. 그리고 T-econo와 에코노베이션 내부 서비스 간의 회원정보를 통합했습니다. 이는 앞으로 협업을 통해 에코노 유니버스 유저 API로 확장될 것입니다!",
      BG_IMAGE: "/dev/2022_summer_dev/portfolio/econoBeep.png",
      YEAR: "2022-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_summer_dev/portfolio/econoBeep.png",
        },
      ],
    },
    {
      TITLE: "Hack Your day!",
      SUBTITLE: "리얼월드와 유사한 환경 구축 및 웹 취약점 연구",
      TEAM_NAME: "아임솔로",
      PEOPLE: "김다애",
      IDEA: "보안장비, 시큐어코딩 회피 공격 및 대응 방안을 연구한 프로젝트입니다. HackYourDay 프로젝트는 웹 개발 시 필요한 최소한의 보안지식을 공유하고자 합니다! 문제점의 해결 방안 도출을 지향하며 세미나를 통해 다양한 취약점 예방 및 대응 절차 도출을 기대합니다!",
      SKILLS:
        "Infra: 7대의 가상머신, WAF, IPS, DB로 네트워크를 구성합니다. ESXI를 사용했고, 설계 시 최대한의 보안장비 가용성 고려하였습니다. IPS는 Snort를 사용하여 inline 방식으로 작동합니다. WEB security: OWASP의 TOP10을 기준으로 Injection, Web shell 공격 등을 사용하였습니다. 공격 로그를 수집하여 IPS 회피 및 시큐어코딩의 취약점을 연구하였고, 대응 리스트를 작성하였습니다.",
      BG_IMAGE: "/dev/2022_summer_dev/portfolio/hackyourday.png",
      YEAR: "2022-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_summer_dev/portfolio/hackyourday.png",
        },
      ],
    },
    {
      TITLE: "손말잇기",
      SUBTITLE: "배우기 쉬운, 소통하기 쉬운, 우리의 손말",
      TEAM_NAME: "E1I3",
      PEOPLE: "김민주, 성윤아, 채상엽, 김현지",
      IDEA: "이 프로젝트는 수어 가용자의 부재로 인해 농인들이 사회에서 겪는 어려움에 주목했습니다. 사회적으로 수어 가용자를 늘리는데 기여하고자, 접근이 간편한 웹 사이트 형식으로 수어 학습 웹 사이트를 기획하게 되었습니다.",
      SKILLS:
        "인공지능에서 Yolo, MediaPipe, OpenCV, 프론트엔드에서 Html, Css, Vanila.js 그리고 백엔드에서 Spring Boot와 MySql, Aws EC2, Aws RDS, Aws S3를 결합하여 프로젝트를 구현하였습니다.",
      BG_IMAGE: "/dev/2022_summer_dev/portfolio/E1I3.png",
      YEAR: "2022-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_summer_dev/portfolio/E1I3.png",
        },
      ],
    },
    {
      TITLE: "T-ECONO",
      SUBTITLE: "지식의 선순환을 꿈꾸다.",
      TEAM_NAME: "멋진거 알자나",
      PEOPLE: "이윤성, 이혜은, 이서현, 김정은, 김수민",
      IDEA: "T-econo는 Econovation의 회원들이 어떤 기술을 공부하고 있는지와 다른 회원들에게 알려주고 싶은 기술들을 공유하는 지식 공유의 선순환을 위한 소통의 장입니다. Econovation 회원뿐만 아니라 Econovation에 관심 있는 전남대 학우 혹은 외부 인원들에게도 Econovation에서 진행해온 프로젝트들과 공유된 개발 기술들을 공유함으로써 관심에 부응하고자 합니다.",
      SKILLS:
        "GraphQL과 REST API 프로토콜 방식을 모두 이용하며, 외부 비정상 접속을 최대한 줄이기 위해서 Interceptor를 적용하고, 유지 보수를 위해 MVC 패턴의 문서화를 구체적으로 작성했습니다. 클라이언트는 유지 보수와 확장성을 위해 React를 사용하여 개발하였습니다. TOAST UI Editor를 사용하여 마크다운 텍스트로 글 작성 기능을 할 수 있게 했으며, 일관된 코드 스타일을 위해 ESLint와 Prettier를 활용하였습니다.",
      BG_IMAGE: "/dev/2022_summer_dev/portfolio/t-econo.png",
      YEAR: "2022-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_summer_dev/portfolio/t-econo.png",
        },
      ],
    },
    {
      TITLE: "나나김",
      SUBTITLE: "머리스타일 변화를 한눈에 볼 수 있는 나만의 헤어 일기장",
      TEAM_NAME: "나나김",
      PEOPLE: "나혜연, 나인혜, 김종준",
      IDEA: "다른 미용실을 가거나 디자이너가 바뀌어 헤어 스타일링에 아쉬움을 느낀 적이 있지 않나요? 헤어로그는 이러한 상황에서도 만족도 높은 스타일링을 받을 수 있도록 하기 위해 기획되었습니다. 사용자는 미용실 방문 후 시술 종류에 따른 기록 양식을 제공받으며, 만족도를 기억할 수 있습니다. 이를 통해 자신에게 맞는 미용실을 찾고 원하는 스타일링을 받도록 돕습니다.",
      SKILLS:
        "Andriod와 IOS에서 모두 사용 가능한 앱을 만들기 위해 PWA(Progressive Web App) 기술을 사용하였습니다. 프론트엔드는 html, css, vanilaJS를 사용하였고 백엔드는 nodeJS, mySQL을 사용하였고 herokuapp을 통해 서버를 배포하였습니다. 이미지 업로드 및 불러오기 기능을 위해 cloudinary 플랫폼을 사용하였습니다",
      BG_IMAGE: "/dev/2022_summer_dev/portfolio/HairLog.png",
      YEAR: "2022-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_summer_dev/portfolio/HairLog.png",
        },
      ],
    },
    {
      TITLE: "Junggle",
      SUBTITLE: "우리의 동반성장을 위한 지속 가능한 생태계,",
      TEAM_NAME: "Surfyagers",
      PEOPLE: "황지우, 김서하, 최명선, 임채승",
      IDEA: "우리가 살면서 겪는 다양한 커리어 혹은 라이프스타일 관련 궁금증들, 어떻게 해결하시나요? 지금, 정글에서 다양한 커리어 및 라이프스타일 분야에 대한 경험을 갖춘내 주변 멘토를 직접 만나서대화하며, 궁금증을 해소하고, 쑥쑥 성장해요. 열대우림 속에서 여러 생물들이 함께 울창한 생태계를 이루듯, 나의 성장을 도울 다양한 사람들을 만나 새로운 시너지를 경험해보세요!",
      SKILLS:
        "Junggle은, FE로 iOS와 BE로 nodejs 기반으로 개발하였습니다. FE는 swift 언어로  RxSwift와 Alamofire을 이용하여 개발하였으며, BE는 MariaDB, Nestjs를 주축으로 gRPC, MSA등 을 이용하여 개발하였습니다. 단순히 코드 작성보다는 ERD, Sequence Diagram을 중시하며 개발하였습니다.",
      BG_IMAGE: "/dev/2022_summer_dev/portfolio/juggle.png",
      YEAR: "2022-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_summer_dev/portfolio/juggle.png",
        },
      ],
    },
    {
      TITLE: "Callusic-new",
      SUBTITLE: "온라인 작사 작곡 협업 웹 사이트",
      TEAM_NAME: "잘가라회장단.",
      PEOPLE: "김성혁, 박재현, 김규란, 홍동건, 한수아",
      IDEA: "요즘 나오는 좋은 노래들, 혼자서 작곡하는 걸까요? 실제로 요즘 나오는 곡 중 절반 이상이 공동 작곡 형태로 발매됩니다. 대형 엔터테인먼트에서는 일찍부터 해외 유명 프로듀서들과 국내 탑 프로듀서들이 모여 협업하는 송캠프를 진행하고 있습니다. 하지만 이 송캠프는 큰 비용이 들뿐더러 공간적 제약이 존재하여 탑 프로듀서가 아닌 대부분의 프로듀서는 지원조차 하지 못하는 상황입니다. 그래서 저희 collusic은 시대에 맞는 온라인 작사 작곡 협업 웹 애플리케이션 서비스를 제안합니다.",
      SKILLS:
        "Collusic은 저번 학기 기획을 바탕으로 기술스택에 많은 변화를 주었습니다. Client는 토스에서 주목하고 있는 Recoil 상태관리 라이브러리와 MVVM 디자인 패턴을 적용하였고, OOP를 위해 TypeScript 언어로 프로젝트를 진행하였습니다. Server는 Spring Boot, Spring Web MVC, Spring Data JPA를 이용하여 핵심 도메인을 설계하고 페어프로그래밍을 통해 개발 방향성에 대해 함께 고민하며 페어가 가지고 있는 좋은 습관들을 배울 수 있었습니다.\n세 학기에 걸쳐 진행하는 프로젝트인 만큼 처음부터 지금까지의 변천사와 기술적인 내용을 중점으로 발표를 진행할 계획입니다.",
      BG_IMAGE: "/dev/2022_winter_dev/portfolio/Collusic.png",
      YEAR: "2021-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_winter_dev/portfolio/Collusic.png",
        },
      ],
    },
    {
      TITLE: "물에 드리운 그림자",
      SUBTITLE: "TRPG를 PC게임으로 즐길 수 있도록 게임을 제작했습니다.",
      TEAM_NAME: "팜 터틀",
      PEOPLE: "설민우",
      IDEA: "기존에 여러 사람들과 오프라인으로 모여야하고 룰이 어렵다는 제한적인 특성 때문에 TPRG에 관심이 있어도 해보지 못하는 안타까운 상황이 자주 있었습니다. 최대한 그 느낌과 감성을 살리면서도 초보자들도 즐길 수 있도록 하여 PC게임으로 즐길 수 있도록 게임 개발을 진행했습니다.\n키워드를 이용한 추리와 한정된 능력치를 투자해 원하는 방향으로 스토리를 진행해 나가며 여러 가지 결말을 얻을 수 있습니다.",
      SKILLS:
        "기존에 여러 사람들과 오프라인으로 모여야하고 룰이 어렵다는 제한적인 특성 때문에 TPRG에 관심이 있어도 해보지 못하는 안타까운 상황이 자주 있었습니다. 최대한 그 느낌과 감성을 살리면서도 초보자들도 즐길 수 있도록 하여 PC게임으로 즐길 수 있도록 게임 개발을 진행했습니다.\n키워드를 이용한 추리와 한정된 능력치를 투자해 원하는 방향으로 스토리를 진행해 나가며 여러 가지 결말을 얻을 수 있습니다.",
      BG_IMAGE: "/dev/2022_winter_dev/portfolio/PamTurtle.png",
      YEAR: "2021-2",
      LINKS: [
        {
          TITLE: "팜터틀 데모 빌드 링크",
          LINK: "https://drive.google.com/file/d/1PKBOIdShEFvHGc3OGzI4hoVWQ9yHkyZ2/view",
        },
      ],
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_winter_dev/portfolio/PamTurtle.png",
        },
      ],
    },
    {
      TITLE: "오늘의 칵테일",
      SUBTITLE: "감정 분류 인공지능을 활용한 칵테일 추천 프로그램",
      TEAM_NAME: "Alcoholic",
      PEOPLE: "정아진, 경주원",
      IDEA: "다양한 칵테일에 도전해 보고 싶지만, 칵테일과 서먹한 우리! 프로젝트 ‘오늘의 칵테일’의 인공지능 모델은 사용자가 일기를 작성하면 그 안의 텍스트를 분석해 감정을 인식합니다. 일기에서 인식된 감정 값을 토대로 칵테일에 입문하고 싶은 사용자에게 그날의 기분에 최적화된 다양한 맛의 칵테일을 추천하고 그 칵테일의 정보를 제공해 줍니다. 또한, 오늘의 칵테일은 전남대학교 학생들에게 근처 칵테일바에서만 볼 수 있는 시그니처 칵테일을 추천합니다. 오늘의 칵테일과 함께 즐거운 시간 보내세요!",
      SKILLS:
        "7가지 감정(기쁨, 슬픔, 놀람, 혐오, 분노, 슬픔, 중립)이 라벨링된 <한국어 감정 정보가 포함된 단발성 데이터셋>을 사용했습니다.\nTransformer에서 파생된 BERT 모델은 2018년 구글이 발표한 자연어 처리(NLP)에 뛰어난 성능을 보여주는 딥러닝 모델입니다. BERT모델을 기반으로 한국어 성능을 개선한 koBERT모델을 이용해 감정 다중분류 모델을 만들었습니다.",
      BG_IMAGE: "/dev/2022_winter_dev/portfolio/TodayCocktail.png",
      YEAR: "2021-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_winter_dev/portfolio/TodayCocktail.png",
        },
      ],
    },
    {
      TITLE: "카페가네",
      SUBTITLE: "음료를 기준으로 사용자에게 카페를 추천하는 웹사이트.",
      TEAM_NAME: "김가네",
      PEOPLE: "김현지, 김수민, 김정은",
      IDEA: "‘카페가네’는 카페를 고른 뒤 특정한 음료를 선택하는 것이 아닌 음료를 기준으로 나에게 맞는 카페를 소개해주는 웹입니다.\n커피를 마시는 사람들의 수준이 높아지면서 레드오션으로 변해버린 커피시장에서 스페셜티 커피' 가 등장했습니다. 이 점에 집중하려 ‘카페가네’는 카페를 고른 뒤 특정한 음료를 선택하는 것이 아닌 음료를 기준으로 나에게 맞는 카페를 소개해주는 웹입니다.\n이를 통해 같은 음료지만 카페마다 이름이 달라 원하는 음료를 찾기 힘들었던 사람들에게 도움을 주고 한 음료에 대한 정확한 니즈가 있는 사람에게는 짧은 시간의 검색을 통해 음료를 찾아낼 수 있을 것입니다.",
      SKILLS:
        "프론트엔드는 HTML과 CSS, Javascript를, 백엔드는 server에서 NodeJS ,데이터베이스로는 Mysql을 사용하였습니다. 위치기반서비스를 구현하는 데에 있어 성능문제를 해결하고자 Spatial Indexing 방법을 사용해 DB에 저장하였습니다.\n디자인의 경우 일러스트는 adobe illustration을 이용하여 작업하였으며 웹사이트 디자인은 adobe xd를 이용하여 웹 1920을 기준으로 디자인하였습니다. 커피와 어울리는 컬러와 코지 하고 귀여운 콘셉트에 맞게 일러스트와 웹사이트를 디자인하였습니다.",
      BG_IMAGE: "/dev/2022_winter_dev/portfolio/CafeGane.png",
      YEAR: "2021-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_winter_dev/portfolio/CafeGane.png",
        },
      ],
    },
    {
      TITLE: "에그밋(EggMeet)",
      SUBTITLE:
        "알을 깨고 성장하고 싶은 사람들의 만남을 중개하는 iOS 어플리케이션",
      TEAM_NAME: "오감자",
      PEOPLE: "김송아, 류현지, 황지우, 이윤성, 권순찬",
      IDEA: "에그밋은, 한 가지 분야 (자기계발, 취미생활 등)에서 상대방에게 튜터링 또는 조언, 코칭을 해줄 수 있는 ‘멘토’와, 그에게 멘토링을 받고자 하는 ‘멘티’의 만남을 중개하는 모바일 지식 공유 서비스입니다.",
      SKILLS:
        "(iOS)\niOS 어플리케이션의 사용자 인터페이스를 구현하고 이벤트를 관리하는 UIKit 프레임워크를 이용하였고, StoryBoard를 기반으로 개발하였습니다. 더불어 HTTP Networking을 위해 Alamofire라이브러리를 활용하였습니다.\n(SpringBoot)\nSpring boot 2와 Gradle을 기반으로 REST Api Server와 FCM Push Server를 구축하였습니다. 쿼리 작성을 위해 QueryDSL를 사용하였고, JWT Token을 다루기 위해 Spring security와 gson을 사용했습니다. 배포는 직접 구축한 라즈베리파이의 리눅스 서버를 이용했습니다.",
      BG_IMAGE: "/dev/2022_winter_dev/portfolio/EggMeet.png",
      YEAR: "2021-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_winter_dev/portfolio/EggMeet.png",
        },
      ],
    },
    {
      TITLE: "굿데이(GoodDay)",
      SUBTITLE:
        "이별로 인해 무너진 일상의 회복을 돕는 이별극복 서포팅(Supporting) 어플리케이션",
      TEAM_NAME: "네잎블로버",
      PEOPLE: "김시형, 김서하, 임채승, 최명선",
      IDEA: "굿데이는 이별로 인해 상처받은 청년들의 아픔을 공감하고, 이들의 일상 회복을 돕고자 하는 마음에서 시작되었습니다. 오랜 기간 사랑해왔던 연인과의 이별은 심각한 대인관계 외상으로 작용할 수 있으며, 이별의 슬픔이 해결되지 않고 지속될 경우 정신적 질환으로 이어질 수 있습니다. 굿데이는 청년들이 이러한 이별의 아픔을 극복하고, 다시 일상을 회복하며, 성장할 수 있도록 돕습니다.\n사용자는 일기장을 통해 이별 이후 매일의 감정과 생각을 돌아보고 정리하면서 발전적인 방향을 모색할 수 있습니다. 또한, 사용자에게 매일 다양한 미션을 제공함으로써 일상을 리프레쉬하고, 올바른 사회적 관계와 일상을 회복하도록 돕습니다.",
      SKILLS:
        "Storyboard를 기반으로 화면을 구성하였습니다. 추가로 UIKit으로 화면을 설정하고, 이벤트를 관리하였습니다. 백엔드는 FireBase를 사용하여 데이터를 수집하여 추후 어플리케이션의 발전을 도모하였습니다. NoSQL을 사용하여 비교적 자유로운 데이터베이스 설계를 통해 느슨한 데이터 구조를 확보하였습니다. 퍼사드 패턴을 적용하여 어플리케이션을 유지보수 할 때, 리펙토링이 쉽도록 하였습니다.",
      BG_IMAGE: "/dev/2022_winter_dev/portfolio/GoodDay.png",
      YEAR: "2021-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_winter_dev/portfolio/GoodDay.png",
        },
      ],
    },
    {
      TITLE: "Peace Maker",
      SUBTITLE:
        "의문의 사고로 혼수상태에 빠진 주인공이 그의 무의식 세계 안에서 자신을 죽이려고 한 범인을 찾는 게임",
      TEAM_NAME: "끼룩",
      PEOPLE: "박수현, 이승진",
      IDEA: "한 인간은 살아생전에 두 개의 세계를 경험합니다. 한 세계는 인간이 보며 경험하는 의식의 세계이고, 나머지 한 세계는 인간이 경험할 수 없는 무의식의 세계입니다. 쉽게는, 매일 밤 그들이 꾸는 꿈 이라고 하죠.\n무의식 세계에 도달하기 위해서는 꿈을 꿔야 합니다. 꿈을 꾸게 되는 배경에는 단순히 매일 밤 취하는 수면도 있지만, 그렇지 않은 때도 있습니다.\n이 게임의 주인공은 개인 카페를 운영하고 있는 사장입니다. 사람들의 입소문을 타 운 좋게도 2호점 개업을 앞두고 있었죠. 그러던 어느 날, 누군가가 의도적으로 저지른 사고에 의해 혼수상태에 빠지게 됩니다.\n그렇게 그는 자신의 무의식 세계에 도달합니다.",
      SKILLS:
        "Unity를 게임 제작 툴로 사용하였습니다.\nrigidbody2D와 boxcollider2D를 이용해 기본적인 물리를 구현하였으며, Aseprite를 사용하여 게임에 사용될 그래픽 디자인을 작업하였습니다.\nBool함수와 rayhitscan함수를 이용해 게임 내 오브젝트와 상호작용하였고, Dictionary와 add를 이용해 NPC의 대사를 출력하였습니다.",
      BG_IMAGE: "/dev/2022_winter_dev/portfolio/PeaceMaker.png",
      YEAR: "2021-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_winter_dev/portfolio/PeaceMaker.png",
        },
      ],
    },
    {
      TITLE: "WE: ART",
      SUBTITLE:
        "We are Artist! 아마추어 예술인들을 위한 작품 경매 사이트, WE:ART",
      TEAM_NAME: "CSRS",
      PEOPLE: "주동혁, 김민주, 홍동건, 이서현",
      IDEA: "WE:ART는 “We are Artist!”, 누구든 예술인이 되어 함께 소통할 수 있는 공동의 목표를 담고 있습니다. 예술에 대한 수요와 관심이 커지지만 표현의 기회를 마음껏 누리지 못했던 이들에게 한정된 공간을 넘어 본인의 예술을 마음껏 표현하고 그 작품들을 사람들과 공유할 것을 제안합니다.\n자신의 예술품을 경매에 올려보세요. 예술품들을 관람하며 마음에 드는 경매에 참여해보세요. 예술에 대한 수요를 충족시키고 표현의 한계를 넘은 예술가들의 무대가 열립니다.",
      SKILLS:
        "컴포넌트의 재사용성을 고려한 Atomic Design을 도입하여 React를 기반으로 프론트엔드 개발하였고, UI 컴포넌트를 독립적으로 테스트할 수 있는 UI 툴 라이브러리인 Storybook을 활용하였습니다.\n백엔드는 Spring Boot와 Spring Data JPA를 이용하여 웹 어플리케이션을 개발하였고, 관계형 데이터베이스인 MySQL을 사용하였습니다.",
      BG_IMAGE: "/dev/2022_winter_dev/portfolio/WeArt.png",
      YEAR: "2021-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_winter_dev/portfolio/WeArt.png",
        },
      ],
    },
    {
      TITLE: "HoneyBe",
      SUBTITLE:
        "꿀벌이 만드는 설레는 세상, 전남대학교 학생들의 새로운 만남을 응원하는 그곳, HoneyBe !",
      TEAM_NAME: "TMI",
      PEOPLE: "김정인, 채상엽, 성윤아, 나영주",
      IDEA: "HoneyBe는 취미, 관심사를 기반으로 한 소개팅 어플리케이션입니다\n전남대학교 학생들만을 대상으로 제공하는 서비스로 학생들간의 자유롭고 건전한 연애 문화를 지향합니다. 인공지능 기반으로 이상형을 추천하여 사용자의 만족도를 높이고자 하였습니다.\n코시국(코로나 상황에) 대학생들이 빼앗긴 낭만을 찾아 설레는 만남으로 가득한 서비스가 되길 기대합니다!",
      SKILLS:
        "안드로이드\nAndroid Studio와 SpringBoot간 통신을 위하여 Http 통신 라이브러리 Retrofit을 이용하였고, 서비스의 실제 배포 후 유지 보수를 고려하여 안드로이드 MVP 패턴을 채택하였습니다.\n인공지능\n딥러닝 기반의 추천 시스템을 개발하였습니다. 콜드 스타트 문제를 해결하기 위해 외부 데이터를 사용한 비지도 학습을 사용하였습니다. 모델 배포를 위해 Amazon Web Service (AWS)를 사용하였습니다.",
      BG_IMAGE: "/dev/2022_winter_dev/portfolio/HoneyBe.png",
      YEAR: "2021-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2022_winter_dev/portfolio/HoneyBe.png",
        },
      ],
    },
    {
      TITLE: "투너",
      SUBTITLE: "독자들을 위한 웹툰 리뷰 플랫폼, 투너",
      TEAM_NAME: "투너",
      PEOPLE: "김성혁, 정회형, 서서영, 김창영, 이상윤",
      IDEA: "투너는 재미있게 본 웹툰을 다른 사람들과 공유하고, 전에는 몰랐던 새로운 웹툰을 추천받아 숨겨진 명작을 발굴할 수 있는 수 있는 독자들의 소통의 장입니다. 폭발적으로 성장하고 있는 웹툰 시장 규모에 비해 웹툰 독자들이 정보를 나눌 수 있는 공간은 턱없이 부족한 상황입니다. 특히, 리뷰를 통해 숨은 명작이 발굴될 수 있는 공간은 더더욱 부족합니다. 이에 투너는 독자들의 교류의 장과 건전한 웹툰 문화를 조성하고, 독자들 간의 소통을 통한 성숙한 웹툰 팬덤 문화가 형성되어 투너가 독자와 작가뿐 아니라 웹툰 산업 전반의 성장에도 도움이 되었으면 좋겠습니다. 나만 알던 웹툰이 모두의 웹툰이 되는 그날까지...",
      SKILLS:
        "프론트엔드 - HTML과 CSS를 이용해 사용자에게 편리한 인터페이스를 구성하였고 웹 페이지의 속도를 향상시키기 위해 전체 페이지를 새로 고치지 않고 필요한 데이터만을 송수신할 수 있는 Ajax 통신을 사용하였습니다. 또한 비동기식 요청을 사용하여 교신 시 응답을 기다리지 않고도 계속해서 다음 작업을 이어갈 수 있도록 하였습니다.\n백엔드 - Spring Boot, Spring Web MVC, Spring Data JPA를 이용하여 핵심 도메인을 설계하고 Spring Security를 이용하여 사용자 인증/인가를 처리하고 있습니다.\n추천 시스템 - 웹툰 데이터를 기반으로 사용자가 선택한 웹툰과 비슷한 웹툰을 추천해주는 내용 기반 필터링과 사용자 리뷰를 기반으로 비슷한 사용자가 리뷰를 남겼거나 추천한 웹툰을 추천해 주는 협업 기반 필터링을 통해 사용자가 좋아할 만한 웹툰을 추천해 줍니다.",
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/Tooner.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/Tooner.png",
        },
      ],
    },
    {
      TITLE: "유서써유(You Will)",
      SUBTITLE: "나와 모두에게 쓰는 편지, 유서써유(You Will)",
      TEAM_NAME: "캥거루즈",
      PEOPLE: "김송아, 김유리, 김민주, 류현지, 정주희",
      IDEA: "'You Will(유서써유)'는 자아성찰을 위한 유서, 미래의 자신이나 타인에게 보내는 편지, 타인과 공유하는 힐링글 쓰기를 할 수 있는 웹과 모바일 앱을 제안합니다. 당장 여러분이 몇 시간 또는 며칠 후 세상을 떠나게 된다면 어떤 말을 남기고 싶으신가요? 유서 쓰기를 통해 지금까지의 삶을 돌이켜보면서, 힘들었던 것을 털어놓고 소중한 것들에 대해 생각해보며 앞으로의 삶을 긍정적으로 볼 수 있게 됩니다. 일주일, 한 달, 일 년 후 앞으로의 나에게 하고 싶은 이야기를 편지로 쓰면 지정한 날에 받을 수 있습니다. 또한 자신이나 타인을 격려하는 힐링 글을 공유할 수 있는 커뮤니티를 마련했습니다.\n바쁜 일상 속에서도 우리는 삶을 성찰하면서 삶을 다른 시각으로 바라보고 앞으로의 삶을 새롭게 계획하고 실천할 수 있게 됩니다. 우리가 자주 사용하는 컴퓨터와 핸드폰으로 자아성찰을 할 수 있는 글쓰기를 습관화할 수 있다면 건강한 정신을 잘 유지할 수 있을 것입니다.",
      SKILLS:
        "웹 애플리케이션은 HTML과 CSS, JavaScript를 활용하여 전반적인 개발을 진행하였고, 안드로이드 애플리케이션에서는 Android Studio에서 Java를 기반으로 구현하였습니다. 웹과 안드로이드 애플리케이션 모두 Firebase Realtime Database를 통해 데이터베이스를 구축하였으며, 공통된 데이터베이스를 공유하며 웹과 안드로이드 두 플랫폼에서 함께 사용할 수 있는 애플리케이션을 구현하였습니다.",
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/YouWill.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/YouWill.png",
        },
      ],
    },
    {
      TITLE: "HCP(Humming based Chord Progress)",
      SUBTITLE: "흥얼거림을 기반으로 노래를 만들어주는 인공지능 작곡 프로그램",
      TEAM_NAME: "ARIA",
      PEOPLE: "김서영, 감양하, 신재욱",
      IDEA: "본 프로젝트는 흥얼거림(Humming)을 기반으로 코드(Chord) 반주를 생성하여 음악을 만드는 것을 목표로 합니다. 우리가 알고 있는 성악곡은 보편적으로 멜로디(Melody)와 코드 진행(Chord)의 결합으로 이루어져 있습니다. 따라서 머신러닝을 통해 Melody와 조화를 이루는 Chord 진행을 찾을 수 있다면, Humming과 조화를 이루는 Chord를 찾을 수 있을 것입니다. 본 프로젝트는 자연어 처리(NLP) 분야에서 사용되고 있는 Transformer 모델을 기반으로 흥얼거림과 어울리는 코드 진행을 찾는 것을 목표로 했습니다. 연구 결과 Humming에서 멜로디 라인을 추출하여 여기에 대응되는 코드 진행을 찾을 수 있었습니다.",
      SKILLS:
        "NLP(자연어 처리)에서 자주 사용되는 Transformer 모델은 지도 학습으로 학습됩니다. 학습은 Fast.ai라이브러리를 사용했습니다. MIDI 데이터는 멜로디와 코드의 쌍으로 존재합니다. 인풋으로 활용된 허밍(Humming)인 오디오 데이터를 컴퓨터가 이해할 수 있는 MIDI 데이터로 변환하고, 이를 기반으로 모델은 그에 맞는 반주인 Chord를 예측(Output)합니다. 이 프로젝트는 음악에서 음표가 가진 특성을 음(note)과 지속시간(duration)으로 단순화시키고, 토큰화시키는 python 라이브러리인 music21을 활용하여 전개되었습니다.",
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/HCP.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/HCP.png",
        },
      ],
    },
    {
      TITLE: "Collusic",
      SUBTITLE: "온라인 작사 작곡 협업 웹 사이트",
      TEAM_NAME: "니곡내곡",
      PEOPLE: "박재현, 주동혁, 김다애, 황지우, 한수아",
      IDEA: "요즘 나오는 좋은 노래들, 혼자서 작곡하는 걸까요? 실제로 요즘 나오는 곡들 중 절반 이상이 공동 작곡 형태로 발매됩니다. 사실 대형 엔터테인먼트에서는 일찍부터 해외 유명 프로듀서들과 국내 탑 프로듀서들이 모여 협업을 하는 송캠프를 진행하고 있습니다. 하지만 이 송캠프는 많은 비용이 들뿐더러 공간적 제약이 존재하여 탑 프로듀서가 아닌 대부분의 프로듀서들은 지원조차 하지 못하는 상황입니다. 그래서 저희 collusic은 시대에 맞는 온라인 작사 작곡 협업 웹 애플리케이션 서비스를 제안합니다.\n저희 collusic은 저번 학기 하고는 다르게 배포를 목적으로 두어 세부적인 기획에 힘을 기울였습니다. 먼저 요청 및 기여할 수 있는 Field로는 melody, lyric, intrument 총 3개로 분류하였고, 요청자는 어떤 Field를 요청할지 선택할 수 있습니다. 기여자는 요청 프로젝트에 허용된 Field 내에서 자유롭게 작업 후 기여할 수 있습니다. 본인의 활동 및 채택 history는 마이페이지에 반영됩니다. Server 과부하와 UI/UX 적인 요소를 고려하였고 그에 따라 한 줄 소개 150자 이내, 업로드 파일 크기 1GB 제한 등의 허용기준을 적용했습니다.\n기능에 중점을 두었던 저번 프로젝트와는 달리 BE, FE 개발자 및 디자이너가 한 팀을 이루어 client, server, UI/UX 모두에 힘을 기울였습니다.\n리팩터링 및 기능 추가를 통해 베타 서비스를 출시할 계획입니다. 또한 문서화를 철저히 하여 에코노베이션 부원 분들이 자유롭게 본인이 공부한 기술들을 적용할 수 있는 오픈 토이 프로젝트로 새롭게 발돋움할 계획입니다.",
      SKILLS:
        '저번 collusic과는 다르게 FE와 디자인적 요소가 많이 변화하였습니다. react를 통해 컴포넌트 구조를 기반으로 SPA Single Page Application)을 구현하였고 그에 따른 디렉터리 구조를 고민하였습니다.\n디렉터리 구조로는 presentational & container 디자인 패턴을 채택하였고 UI 컴포넌트와 로직을 수행하는 컴포넌트를 구분하기 위해 노력하였습니다.\n이번 collusic에서는 사용자 입장에서 사용 시나리오가 작성되었고, 사용법이 직관적으로 느껴질 수 있도록 페이지를 기획했습니다. 따라서 상황에 맞는 API를 먼저 설계한 후에 서버를 구축하였고, 웹 서버 프레임워크로는 익스프레스를 사용하였습니다. 로그인 구현을 위해 세션 인증 방식을 사용했으며, 파일 업로드를 위해 multer 모듈을 채택했습니다.\nCollusic은 추후 "Toy-project"로 진행될 가능성을 열어두고 있습니다. 이를 위해 다른 데이터 베이스와 호환이 유용하고 다른 SQL 데이터 베이스로 전환이 편리한 Sequelize를 사용하였습니다.\nCollusic의 개발자들은 git-flow 기법을 채택하여 협업에 임하고 있습니다. gitflow는 병렬로 처리하던 작업들이 완료가 되면 가까운 배포 주기에 포함시켜 출시하는 개발 프로세스를 가장 잘 반영할 수 있는 모델로서 이점이 있습니다.',
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/Callusic.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/Callusic.png",
        },
      ],
    },
    {
      TITLE: "All Rounder",
      SUBTITLE:
        "주가 데이터인 시계열 데이터를 이용해 다음 주가를 예측하는 인공지능 프로그램",
      TEAM_NAME: "디핑 소스",
      PEOPLE: "강다은, 이서현",
      IDEA: '다들 주식 하나쯤 가지고 계시나요? 혹시 매일매일 주식을 확인하며 전전긍긍하고 있지는 않나요? 언제 주식을 사야할지 팔아야할지 예측할 수 없는 주식시장! LSTM기반 인공지능 예측모델로 변동성이 큰 주가 흐름에 맞춰 적절하게 주식시장에 대응할 수 있습니다. 저희 "ALL_ROUNDER"는 알맞은 투자 방향 제공 서비스를 제공합니다!',
      SKILLS:
        '다들 주식 하나쯤 가지고 계시나요? 혹시 매일매일 주식을 확인하며 전전긍긍하고 있지는 않나요? 언제 주식을 사야할지 팔아야할지 예측할 수 없는 주식시장! LSTM기반 인공지능 예측모델로 변동성이 큰 주가 흐름에 맞춰 적절하게 주식시장에 대응할 수 있습니다. 저희 "ALL_ROUNDER"는 알맞은 투자 방향 제공 서비스를 제공합니다!',
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/AllRoundeer.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/AllRoundeer.png",
        },
      ],
    },
    {
      TITLE: "에코노 냉장고",
      SUBTITLE:
        "가지고 있는 재료로 만들 수 있는 음식 레시피를 추천해주는 웹사이트",
      TEAM_NAME: "위험한 형제들",
      PEOPLE: "권순찬, 이윤성",
      IDEA: "코로나 19로 인한 언택트 시대에, 모두들 집에서 생활하는 시간이 늘어나 집밥을 해 먹는 시간도 자연스레 늘어났습니다. 막상 재료는 이것저것 사놨는데, 어떤 요리를 만들지 고민하는 분들을 위해 이 프로젝트를 기획하였습니다. 냉장고에 있는 재료들을 넣고, 검색 버튼을 클릭하기만 한다면 지금 가지고 있는 재료로 만들 수 있는 레시피를 추천해줍니다!\n집에 있는 재료를 선택한 뒤에, '레시피 추천받기' 버튼을 누르기만 한다면 해당 재료로 만들 수 있는 요리 레시피를 추천해줍니다. 현재 재료로만 만들 수 있는 레시피 이외에도 현재 재료에 하나에서 두 개의 재료를 추가하면 만들 수 있는 요리 레시피도 제안해드립니다.",
      SKILLS:
        "프론트엔드에서는 다중 페이지 구성과 유지 보수, 생산성을 위하여 React를 사용하였습니다. 그리고 변수와 컴포넌트의 생명주기에 따른 개발을 위해 React Hooks를 사용하였고, 전역적으로 사용되는 재료 데이터를 위해 Context API를 사용하였습니다. 그리고 전체적인 코드의 질 향상을 위해 ES6 문법을 활용하였습니다. 페이지 구조를 짜기 위해서는 React Router, Rest 서버와의 통신을 위해서는 Axios를 사용하였습니다.\n백엔드는 Spring boot 2를 기반으로 개발하였습니다. gradle 기반으로 세팅 및 빌드하였으며, 레시피 검색을 위한 동적 쿼리 생성을 하기 위해 QueryDSL을 사용하였습니다. 데이터베이스로는 개발 환경에선 H2를 사용하였고, 실제 빌드 시에는 MariaDB를 사용하였습니다.",
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/EconoRefrigerator.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/EconoRefrigerator.png",
        },
      ],
    },
    {
      TITLE: "Pinning",
      SUBTITLE:
        "나만의 추억을 기록하는 소셜 맵(Social Map) 안드로이드 어플리케이션",
      TEAM_NAME: "이음",
      PEOPLE: "성윤아, 이혜은",
      IDEA: "인스타그램, 페이스북 등의 SNS가 개인의 추억을 기록하는 용도로 많이 사용되고 있습니다. 이를 지도에 접목시켜 보았습니다.\n지도 위에 핀을 꽂으면서 자신의 추억을 기록할 수 있다는 점에서 많은 정보들을 지도 위에 시각화하여 한눈에 정리할 수 있습니다. 핀의 카테고리 지정, 사진, 스토리 등을 함께 입력하여 핀의 세부 정보를 담을 수 있도록 하였습니다. 사용자는 핀에 지정된 카테고리 별로 필터링된 정보들을 확인할 수 있으며 핀 이름으로도 검색할 수 있습니다.\n본 서비스가 새로운 형태의 기록형 서비스가 될 수 있기를 기대합니다.",
      SKILLS:
        "Java를 기반으로 하여 Android Studio를 이용하여 개발하였으며, 카카오맵 API를 활용하여 지도 구현을 하였습니다. 데이터베이스로 Firebase를 사용하여 핀의 정보를 저장할 수 있도록 구현하였습니다.",
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/Pinning.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/Pinning.png",
        },
      ],
    },
    {
      TITLE: "태그헌터",
      SUBTITLE: "찾아내고 맞바꾸는 스토리텔링 RPG",
      TEAM_NAME: "레인디어게임즈",
      PEOPLE: "김영우, 임원빈",
      IDEA: "레인디어게임즈는 GITCT(광주정보문화산업진흥원)의 게임 제작 지원사업에 선정되었습니다.\n올해 말 얼리 액세스 출시를 목적으로 스토리텔링 RPG '태그헌터'를 개발하고 있습니다. '태그헌터'는 대상의 특징인 '태그'를 이용한 퍼즐과 스토리, 캐릭터 중심의 RPG 게임입니다.",
      SKILLS:
        "C#을 기반으로 Unity engine을 이용하여 개발하였습니다. 커스텀 에디터를 제작하고, 엔진 GUI상에서 게임 데이터를 수정할 수 있도록 설계하여 개발 효율을 높였습니다. 저장 데이터의 안전한 보존을 위해 AES를 도입하였으며 글로벌 서비스 론칭을 위해 다국어를 지원합니다.",
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/TagHunter.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/TagHunter.png",
        },
      ],
    },
    {
      TITLE: "FRIENDO",
      SUBTITLE:
        "그룹 간의 To Do List를 만들어 함께 작성하고 관리하는 To Do List 애플리케이션",
      TEAM_NAME: "FastBoys",
      PEOPLE: "채상엽, 홍동건",
      IDEA: "Friendo는 팀 프로젝트 진행 시 팀만의 TodoList를 관리할 수 있습니다. 기존 대부분의 앱들과는 다르게 알람 기능도 무료로 이용할 수 있습니다. Friendo를 통해 하나의 일정을 공유하는 여러 그룹원들 사이에서 일정을 차질 없이 관리할 수 있게 됩니다.\n이번 Friendo 프로젝트를 통하여 안드로이드의 가장 기본적이면서도 필수적인 요소들을 다루면서 기본기 다지는 기회를 가졌습니다.",
      SKILLS:
        "리얼타임 데이터베이스를 이용해 실시간 업데이트를 지원합니다.\n또한 Firebase FCM을 이용하여 푸시 메시지 기능을 구현하였고, 브로드캐스트, 서비스, AlarmManager를 이용한 알람 기능을 구현하였습니다.",
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/Friendo.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/Friendo.png",
        },
      ],
    },
    {
      TITLE: "Treena",
      SUBTITLE: "자연어 처리 기반 감정 분석 다이어리 안드로이드 애플리케이션",
      TEAM_NAME: "파릇파릇",
      PEOPLE: "류현지, 김송아, 김유리, 나영주",
      IDEA: "‘트리나’(treena, ‘tree’+‘나’)는 성장하는 나무에 자기 자신을 표상할 수 있는 감정일기 안드로이드 애플리케이션입니다. 사용자가 일기를 작성하면 자연어 처리를 통해 일기 내용을 토대로 사용자의 감정을 분석하고 분류합니다.\n일기에 대한 피드백으로 처리한 감정에 따라 멘트를 제공하며 나무가 성장하는 모습을 보여줍니다.\n트리나를 통해 일상에서 느끼는 다양한 감정과 생각을 차곡차곡 기록하며, 하루를 정리하고 성장할 수 있는 계기를 제공하고자 합니다. 또한 각 일기의 감정에 맞추어 건네주는 멘트와 그림을 통해 지친 하루의 끝에 위로와 응원을 건넵니다.",
      SKILLS:
        "본 애플리케이션은 Android Studio에서 Java를 활용하여 개발하였으며, Firebase 플랫폼을 통해 데이터베이스를 구축하였습니다.\n그리고 모바일 환경에서 딥러닝 모델을 사용하기 위해 클라우드 플랫폼인 AWS를 활용하여 모델을 연결 및 호출할 수 있도록 구현했습니다.\n모델을 도커 이미지 형태로 ECR에 저장하고, Lambda와 Gateway를 통해 호출할 수 있도록 파이프라인을 구현하였습니다.",
      BG_IMAGE: "/dev/2021_summer_dev/portfolio/Treena.png",
      YEAR: "2021-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_summer_dev/portfolio/Treena.png",
        },
      ],
    },
    {
      TITLE: "We Meet",
      SUBTITLE: "날짜추천 및 일정공유 캘린더 안드로이드 애플리케이션",
      TEAM_NAME: "We Meet",
      PEOPLE: "서시양, 주동혁, 한수아",
      IDEA: "친구들과 혹은 팀원들과 약속 날짜를 정할때의 번거로움을 해결해줄 캘린더 애플리케이션 WeMeet을 소개합니다. 그룹원들끼리의 일정들을 고려하여 만남일정을 추천해주는 애플리케이션 WeMeet은 AndroidStudio를 기반으로 하여 Firebase를 서버로 두고 개발을 진행하였습니다. 구글 로그인 방식으로 회원가입과정을 최대한 간편화하였고 가이드 라인을 제공하여 누구나 쉽게 캘린더 사용을 할 수 있습니다. 그룹원들간의 불필요한 커뮤니케이션을 줄이고 각자의 프라이버시를 지켜주면서 간편하게 일정을 조율하게 될 것입니다. 이제 WeMeet으로 더 쉽고 편리하게 사람들과 일정을 관리해보세요!",
      SKILLS: "",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/WeMeet.png",
      YEAR: "2020-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/WeMeet.png",
        },
      ],
    },
    {
      TITLE: "Which Book",
      SUBTITLE: "개발자 책 리뷰 웹사이트",
      TEAM_NAME: "진상",
      PEOPLE: "김상엽, 진성호",
      IDEA: "개발 서적 리뷰 사이트를 소개합니다.",
      SKILLS:
        "아키텍처의 종류에 관심이 있는 분 그리고 리팩토링을 하면서 겪은 경험을 나눌려고 합니다. 이 발표가 많은 분들에게 많은 영감을 주기를 바랍니다.",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/WhichBook.jpg",
      YEAR: "2020-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/WhichBook.jpg",
        },
      ],
    },
    {
      TITLE: "그린케어(grandcare)",
      SUBTITLE: "딥러닝 영상처리 기반 독거노인의 응급상황 감지 시스템",
      TEAM_NAME: "아이됴아",
      PEOPLE: "나영주, 송창훈, 황지우",
      IDEA: "홀로 사는 노령인구는 급작스럽게 질병, 또는 응급상황에 노출될 경우, 골든타임을 놓치고, 생명에 큰 위협이 생길 가능성이 높습니다. 잠시 몸이 멀어져 좀처럼 찾아뵙기 힘든 지금, 우리의 할머니, 할아버지의 안전을 24시간 모니터링 할 수 있는 시스템이 있다면 어떨까요? GrandCare는 홀로 거주하시는 노인분들이 갑자기 쓰러지시는 경우, 이를 영상처리 기반 인공지능을 통해 감지하고, 보호자에게 알림하며, 응급의료시설에 자동신고 할 수 있는 시스템입니다.",
      SKILLS:
        "CNN을 기반으로 한 MobileNet_v2를 응용한 FDNet을 활용하여 컴퓨터가 스스로 사람의 넘어짐을 감지할 수 있도록 하였습니다. 이번 Winterdev 에서 저희 '아이됴아' 팀이 노인분들의 눈부신 하루를 지키는 따듯한 눈길과 같은 기술, Grandcare 를 공개합니다. Stay tuned!!",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/grandcare.jpg",
      YEAR: "2020-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/grandcare.jpg",
        },
      ],
    },
    {
      TITLE: "트로트 끝판왕",
      SUBTITLE: "트로트 콘텐츠 모음 안드로이드 애플리케이션",
      TEAM_NAME: "낌",
      PEOPLE: "김송아, 김유리",
      IDEA: "‘트로트 끝판왕’은 사용자들이 다양한 트로트 콘텐츠를 하나의 애플리케이션으로 이용할 수 있도록 기획되었습니다. 끝판왕이라는 이름답게 트로트 관련 행사 및 방송 일정과 노래 및 예능 영상을 편하게 즐길 수 있습니다. 중장년층을 대상으로 하는 서비스인만큼 직관적인 UI 디자인과 단순한 프로세스를 구현하는 데 집중하였습니다. 더불어 찜하기 기능과 카카오톡 공유하기 기능을 구현하여 보다 유용한 서비스를 만들고자 하였습니다.",
      SKILLS:
        "본 애플리케이션은 Java를 기반으로 하고 Android Studio를 이용하여 개발하였으며, YouTube 관련 라이브러리 및 API와 KakaoLink API를 활용하여 완성하였습니다. 본 서비스가 트로트 문화를 향유하는 효과적인 매개체가 될 수 있기를 기대합니다.",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/TrotEnding.png",
      YEAR: "2020-2",
      LINKS: [
        {
          TITLE: "트로트 끝판왕 Github",
          LINK: "https://github.com/JNU-econovation/the-last-king-of-TROT",
        },
      ],
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/TrotEnding.png",
        },
      ],
    },
    {
      TITLE: "가는길에",
      SUBTITLE: "여행 일정 스케줄링 및 인공지능 기반 관광지 추천 웹사이트",
      TEAM_NAME: "JMT-C",
      PEOPLE: "김규란, 김창영, 안서진, 정지은",
      IDEA: "‘1분 만에 여행 코스 짜기’ 혹시 한 번이라도 상상해본 적 있으신가요? 가는길에 에서는 가능합니다. 딥러닝을 사용하여 동행자 정보, 교통수단, 일정정보, 지역정보 그리고 가고 싶었던 장소들을 입력해 주시면 알고리즘을 통한 최적의 경로추천과 인공지능이 내 취향에 딱 맞는 추천 장소들을 알려줍니다. 혹시 가고 싶었던 곳이 없어도 걱정하지 마세요! 누구와 함께 가는지 어느 지역을 방문하는지를 고려해서 추천 장소를 제공해드립니다. 코로나를 맞이하며 많이 침체된 여행시장이 코로나 이후 가는길에를 통해 원래의 모습을 되찾길 기대합니다.",
      SKILLS: "",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/GanungilE.gif",
      YEAR: "2020-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/GanungilE.gif",
        },
      ],
    },
    {
      TITLE: "이도",
      SUBTITLE: "S-BERT기반, 검색엔진(Book Sementic search, Slack Chatbot)",
      TEAM_NAME: "이도",
      PEOPLE: "신재욱, 김창영, 홍찬의",
      IDEA: "S-BERT기반, 검색엔진(Book Sementic search, Slack Chatbot)",
      SKILLS:
        "Slack 무료 플렌에서는 과거 게시물들을 볼 수 없습니다. 현재 동아리 Slack에서는 약 2달이 지난 게시글은 모두 볼 수 없습니다. 과거 게시물을 보기 위해서는 Slack에 참여한 인원당 8달러를 지불하는 유료 플랜을 사용해야 하는데, 과거메시지검색을 위해서 50여만원을 매달 지불하는 것은 현실적으로 힘든 일입니다. 동아리방 서버를 이용해서 과거 게시물에 대한 데이터베이스를 구축하고 Sentenc-Bert모델을 사용하여 검색엔진을 만들었습니다.",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/Edo.png",
      YEAR: "2020-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/Edo.png",
        },
      ],
    },
    {
      TITLE: "Collusic(Collaboration + Music)",
      SUBTITLE: "온라인 작곡, 작사 협업 웹사이트",
      TEAM_NAME: "Seagull & Seagirl",
      PEOPLE: "박재현, 김다애",
      IDEA: "요즘 나오는 좋은 노래들, 혼자서 작곡하는 걸까요? 실제로 요즘 나오는 곡들 중 절반 이상이 공동작곡 형태로 발매됩니다. 사실 대형 엔터테인먼트에서는 일찍부터 해외 유명 프로듀서들과 국내 탑 프로듀서들이 모여 협업을 하는 송캠프를 진행하고 있습니다. 하지만 이 송캠프는 많은 비용이 들 뿐더러 공간적 제약이 존재합니다. 또한 탑 프로듀서가 아닌 대부분의 프로듀서들은 지원조차 하지 못하는 상황입니다. 그래서 저희 collusic은 시대에 맞는 온라인 프로듀싱 협업 서비스를 제안합니다.",
      SKILLS:
        "저희 collusic은 웹 애플리케이션으로서 frontend로 html, css, javascript를 사용하였고 server로 nodeJS, 데이터베이스로 mySQL을 사용하였습니다. 협업자나 기여자가 자신의 프로젝트 파일을 올리는데 multer를 사용하였고 nodeJS 서버와 mySQL 서버를 통해 회원정보, 프로젝트 내용, 프로젝트 파일의 경로 등의 데이터를 송수신합니다. 마지막으로 #passportjsLogin을 통해 사용자마다의 페이지에 대한 권리를 부여합니다.",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/collusic.png",
      YEAR: "2020-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/collusic.png",
        },
      ],
    },
    {
      TITLE: "Pick-T",
      SUBTITLE: "Pick your Trailer : 캠핑 트레일러 쉐어링 서비스",
      TEAM_NAME: "Pick-T",
      PEOPLE: "김성혁, 김정인",
      IDEA: "국내 캠핑이용자 수 403만, 캠핑의 인기와 더불어 매년 10% 이상의 성장세를 기록하고 있는 카라반 시장, 꾸준한 성장세를 기록하는 캠핑 산업 속 고려되지 않는 카라반 주차 문제. 이번 발표에서 팀 '픽트'는 캠핑카 시장이 커지면서 발생하는 사회 문제들 중 주차 문제에 대해서 고민하고 해답을 찾아나가는 과정을 공유합니다. 또한 카라반을 위한 토탈 솔루션 'Pick-T' 애플리케이션을 여러분들께 소개하면서 개발 경험을 공유하고자 합니다. 애플리케이션 개발을 위해 기획부터 어떤 단계를 거쳐 진행을 해왔는지, 기술 스택은 어떻게 선정을 하였는지를 발표합니다.",
      SKILLS:
        "팀 '픽트' 에서 사용한 기술은 크게 안드로이드 스튜디오, Node.js, MongoDB 입니다. 본 발표가 이 기술에 관심있는 분들께 도움 되길 기대합니다.",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/pick-t.png",
      YEAR: "2020-2",
      LINKS: [
        {
          TITLE: "Pick-T Github",
          LINK: "https://github.com/mywnajsldkf/pick_t",
        },
      ],
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/pick-t.png",
        },
      ],
    },
    {
      TITLE: "CheckMate",
      SUBTITLE: "체스보드 위의 캐주얼 무쌍게임",
      TEAM_NAME: "게놈",
      PEOPLE: "김영우, 설민우, 정주희",
      IDEA: "체크메이트는 체스보드 위에서 이루어지는 캐주얼 탑뷰 액션 게임입니다. 검은 제국의 습격에 왕국이 함락되자, 화이트킹은 악마에게 영혼을 팔았습니다. 제국의 황제를 죽이기 전까지는 칼에 베이고 창에 찔려 몇 번을 죽더라도, 그녀는 이 순간으로 되돌아옵니다. 플레이어는 화이트킹을 조작하여 병사들을 물리치며, 제국의 황제에게 복수해야 합니다. 시원하게 적들을 베어내는 쾌감과 적들의 공격을 아슬아슬하게 피하는 짜릿함을 쉽고 빠르게 즐길 수 있습니다.",
      SKILLS: "",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/CheckMate.png",
      YEAR: "2020-2",
      LINKS: [
        {
          TITLE: "체크메이트 Download",
          LINK: "https://drive.google.com/drive/folders/1cUg4xEqoCbWG4sOTssG21yYaK03vEqja",
        },
      ],
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/CheckMate.png",
        },
      ],
    },

    {
      TITLE: "둥둥",
      SUBTITLE: "해변가 유리병편지 웹사이트",
      TEAM_NAME: "Canvas",
      PEOPLE: "류현지, 송정경, 임원빈, 정현석",
      IDEA: "Canvas팀은 다른 유저와의 커뮤니케이션이 가능한 재밌는 웹 서비스를 만들고자 했습니다. 바닷가로 떠밀려오는 유리병을 웹 상에서 잘 디자인하여 사용자에게 매력적으로 다가가는 것이 목표입니다.\n익명성과 일회성 의사소통으로 사람들이 쉽게 마음을 터놓을 수 있는 바닷가, 유리병 편지라는 컨셉을 사용하였고 모래사장에서 편지를 줍는 듯한 재미요소를 넣었습니다.\n'둥둥'은 사이트 이용자들이 다른 유저들의 생각들을 보며 무료함을 달래고, 쓰고싶은 말들을 띄워 보낼 수 있는 바닷가 같은 웹사이트가 되기를 기대합니다.",
      SKILLS: "",
      BG_IMAGE: "/dev/2021_winter_dev/portfolio/DongDong.jpg",
      YEAR: "2020-2",
      LINKS: [
        {
          TITLE: "둥둥 사이트 바로가기",
          LINK: "https://jnu-econovation.github.io/canvas/public/index.html",
        },
        {
          TITLE: "둥둥 Github",
          LINK: "https://github.com/JNU-econovation/canvas",
        },
      ],
      INTRODUCTION: [
        {
          TYPE: "image",
          LINK: "/dev/2021_winter_dev/portfolio/DongDong.jpg",
        },
      ],
    },
    {
      TITLE: "가는 길에",
      SUBTITLE: "",
      TEAM_NAME: "JMT",
      PEOPLE: "김규란, 안서진",
      IDEA: "사용자가 선택한 장소들로 다양한 추천 경로를 제공하는 웹 어플리케이션",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/zbqbgAVfBr4/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/zbqbgAVfBr4",
        },
      ],
    },
    {
      TITLE: "Instagram cloning",
      SUBTITLE: "",
      TEAM_NAME: "BORORO",
      PEOPLE: "탁민경",
      IDEA: "",
      SKILLS:
        "Node.js의 express와 React를 이용해 인스타그램을 웹으로 클론코딩하는 프로젝트 입니다.",
      BG_IMAGE: "https://img.youtube.com/vi/JLsy4DCfsiw/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/JLsy4DCfsiw",
        },
      ],
    },
    {
      TITLE: "으쌰으쌰",
      SUBTITLE: "",
      TEAM_NAME: "자자익선",
      PEOPLE: "김기표, 김종근, 정병재, 이선경",
      IDEA: "지속가능한 발전을 하기 위해 고군분투하는 개발자들을 위한 동기부여 플랫폼. 아침에 일찍 일어나 하고싶은 일들을 하며, 그 일의 성취를 랭킹, 잔디와 같이 매일 가시적으로 보이는 결과물들로 동기부여를 받을 수 있다.",
      SKILLS: "Spring과 React를 활용한 웹 프로젝트 입니다.",
      BG_IMAGE: "https://img.youtube.com/vi/vwlexBdCrnw/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/vwlexBdCrnw",
        },
      ],
    },
    {
      TITLE: "webper",
      SUBTITLE: "",
      TEAM_NAME: "webper",
      PEOPLE: "김서영, 배종진, 최진영",
      IDEA: "webper는 웹사이트 스크래핑을 이용한 나만의 URL 아카이브 어플리케이션 입니다. 다양한 특성의 정보를 가지고 있는 웹사이트를 핵심 정보 위주로 가공해 스크랩을 만듭니다. 그리고 폴더 구조로 스크랩을 깔끔하게 저장 관리할 수 있습니다. puppeteer모듈 서버로 사이트를 스크래핑하고, React로 webper의 모든 UI, UX를 제공하고, Spring Boot로 REST API서버를 만들어 사용자 인증과 식별 및 webper 데이터 제공 기능을 합니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/Es9ASjBCSaU/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/Es9ASjBCSaU",
        },
      ],
    },
    {
      TITLE: "Get your mask on!",
      SUBTITLE: "",
      TEAM_NAME: "AIE",
      PEOPLE: "김민주, 박창대",
      IDEA: "AI를 기반으로 한 마스크 착용 인식 출입통제 시스템입니다. 데이터 크롤링을 하여 이미지 데이터를 수집하였으며 YOLOV3모델을 사용하여 마스크 인식을 하고 아두이노에 초음파 센서와 서브 모터를 연결하여 출입문을 구현하였습니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/-Yzm8ASAclU/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/-Yzm8ASAclU",
        },
      ],
    },
    {
      TITLE: "Hunting Season",
      SUBTITLE: "",
      TEAM_NAME: "SquiEasy",
      PEOPLE: "김창영, 이지율",
      IDEA: "밤마다 괴물을 쫓는 로그라이크 게임입니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/NXMqlOccROU/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/NXMqlOccROU",
        },
      ],
    },
    {
      TITLE: "ROBOTICS=LOVERTICS(로봇팔을 제어하다)",
      SUBTITLE: "",
      TEAM_NAME: "로보덕",
      PEOPLE: "김정인",
      IDEA: "ROS를 이용해서 과수를 인식하고 로봇팔(UR3)를 제어하는 프로젝트를 진행했습니다. 과수 인식을 위해 YOLOV3 모델을 사용했으며 pose data를 획득하기 위해 RGB-D 카메라로 point cloud 데이터를 획득하였고 이를 통해 3차원 좌표를 획득하였습니다. 로봇팔을 작동시키기 위해 moveit! 이라는 소프트웨어를 사용했습니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/Q5QkPeNbKHc/hqdefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/Q5QkPeNbKHc",
        },
      ],
    },
    {
      TITLE: "Palette",
      SUBTITLE: "",
      TEAM_NAME: "Flannel",
      PEOPLE: "김창영, 오중균",
      IDEA: "정기구독형 iOS 이모티콘 플랫폼입니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/Fx-9SdgAXaw/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/Fx-9SdgAXaw",
        },
      ],
    },
    {
      TITLE: "GiftCome",
      SUBTITLE: "",
      TEAM_NAME: "낌",
      PEOPLE: "김송아, 김유리",
      IDEA: "GiftCome은 사용자 맞춤형 선물 추천 웹사이트입니다. 네이버 쇼핑 API를 활용하여 사용자가 입력한 검색 키워드와 희망 가격대, 선물을 받는 사람의 성별과 연령대를 기준으로 선물 목록을 제시합니다. 실시간 인기순 선물을 확인할 수 있으며 팝업창을 통해 접속 시기에 가까운 기념일이나 행사를 위한 선물을 추천합니다. 상품 찜하기, 사용자 간 위시리스트 공유, 커뮤니티 이용을 위해 CRUD를 구현했습니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/vz9XIV847DQ/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/vz9XIV847DQ",
        },
      ],
    },
    {
      TITLE: "ONUL",
      SUBTITLE: "",
      TEAM_NAME: "ONUL",
      PEOPLE: "김성혁, 류현지, 이의종",
      IDEA: "",
      SKILLS:
        "현대인들의 억압된 감정과 통증을 어떻게 해소시킬 수 있을까라는 고민을 시작으로 일기를 통한 감정 자각이라는 메인 키워드를 가지고 안드로이드 앱 프로젝트를 진행했습니다. 이모지를 통해 감정을 시각화하고 구글 음성인식 API를 사용하여 음성으로 일기를 기록할 수 있게 만들었습니다. 또한 Firebase Cloudfirestore를 이용하여 로그인 및 회원 정보 관리, 날짜별 일기를 저장하였습니다.",
      BG_IMAGE: "https://img.youtube.com/vi/Q8S37O_GzGQ/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/Q8S37O_GzGQ",
        },
      ],
    },
    {
      TITLE: "SIoT",
      SUBTITLE: "",
      TEAM_NAME: "GREENTECH",
      PEOPLE: "송정경, 이상윤",
      IDEA: "GREENTECH는 농업에 자동화 시스템을 접목한 스마트 온실 시스템입니다. 사물인터넷 분야에서 가장 대표적인 ADUINO라는 하드웨어를 사용했습니다. 조도, 수분량 측정 및 조절 기능, 화재 감지 기능, 온도 측정 기능이 있습니다. Blynk라는 소프트웨어를 사용해 모바일 앱을 통해 사용자가 쉽게 기능들을 제어할 수 있도록 구현했습니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/Z_WnhbXPEg0/sddefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/Z_WnhbXPEg0",
        },
      ],
    },
    {
      TITLE: "Wenity",
      SUBTITLE: "",
      TEAM_NAME: "TABBY",
      PEOPLE: "임원빈, 정현석",
      IDEA: "동물 친구들을 모아 코모도 왕도마뱀을 물리치는 게임",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/bYDR9_b01Bo/maxresdefault.jpg",
      YEAR: "2020-1",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/bYDR9_b01Bo",
        },
      ],
    },
    {
      TITLE: "piano tutoring",
      SUBTITLE: "",
      TEAM_NAME: "youngDev",
      PEOPLE: "최진영, 김서영",
      IDEA: "집에서도 피아노를 배울 수 있도록 하는 피아노 튜터링 사이트입니다. 짧은 영상 여러개로 이루어진 강의들부터, WebRTC를 이용한 실시간 화상 강의를 통해 어디서나 '진짜' 레슨을 받을 수 있도록 하는 튜터링 서비스 사이트",
      SKILLS: "",
      BG_IMAGE: "/dev/2020_winter_dev/portfolio/youngDev.png",
      YEAR: "2019-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/mv3yg4uWHG4",
        },
      ],
    },
    {
      TITLE: "스마트 도어락",
      SUBTITLE: "",
      TEAM_NAME: "KAB",
      PEOPLE: "최진영, 김서영",
      IDEA: '사용자의 완벽한 외출을 도와주는 IoT 제품인 "스마트 도어락". KETI의 Mobius 서버를 기반으로 도어락의 기본적인 기능부터 센서 제어, 일회용 출입관리 시스템까지 제공하는 플랫폼',
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/5jpdnnSS784/maxresdefault.jpg",
      YEAR: "2019-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/5jpdnnSS784",
        },
      ],
    },
    {
      TITLE: "EXIT",
      SUBTITLE: "",
      TEAM_NAME: "BMW",
      PEOPLE: "",
      IDEA: "위광고와 진짜정보가 혼재된 정보의 바다에서 신뢰할 수 있는 정보를 제공하는 위치기반 sns. 여러분이 보고 느낀 것을 그 자리에서 사진과 함께 올려주세요. 글이 작성된 위치의 분포로 '정체성'을 가진 구심점과 구역이 생성됩니다. 우리는 그 곳에 가보지 않아도 그 공간의 최근 경향을 알 수 있습니다. 여러분과 공간을 이어주는 플랫폼, EXIT 입니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/9z8f1yeggZk/sddefault.jpg",
      YEAR: "2019-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/9z8f1yeggZk",
        },
      ],
    },
    {
      TITLE: "전맛탱",
      SUBTITLE: "",
      TEAM_NAME: "JMT",
      PEOPLE: "",
      IDEA: "전대생이 작성한 키워드 기반의 리뷰로 축적된 데이터를 가지고 식당을 추천해 주는 안드로이드 기반 어플입니다. 상황별, 위치별로 자신에게 맞는 경우를 선택하여 전맛탱으로 든든한 밥 한 끼 어떠세요?",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/_nCGZ4bFnHA/sddefault.jpg",
      YEAR: "2019-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/_nCGZ4bFnHA",
        },
      ],
    },
    {
      TITLE: "tooner",
      SUBTITLE: "",
      TEAM_NAME: "project_review",
      PEOPLE: "",
      IDEA: "독자의, 독자를 위한, 독자에 의한 리뷰 중심 웹툰 커뮤니티입니다. tooner에서 웹툰 리뷰를 공유하고 자유롭게 웹툰 이야기를 할 수 있습니다. 여러분이 좋아하는 웹툰으로 tooner를 채워주세요.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/N5zcX1fvJmE/hqdefault.jpg",
      YEAR: "2019-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/N5zcX1fvJmE",
        },
      ],
    },
    {
      TITLE: "CrawlTheBuilding2",
      SUBTITLE: "",
      TEAM_NAME: "EYoon",
      PEOPLE: "",
      IDEA: "해저부터 우주까지 이어진 빌딩에서 펼쳐지는 전략생존게임입니다. 원하는 스킬을 강화하여 높이 올라가세요. 올라갈수록 다양한 몬스터가 기다리고 있습니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/_O6X71OowSU/sddefault.jpg",
      YEAR: "2019-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/_O6X71OowSU",
        },
      ],
    },
    {
      TITLE: "Mandaphlan",
      SUBTITLE: "",
      TEAM_NAME: "Although",
      PEOPLE: "김양하, 김정인, 신재욱",
      IDEA: "만다라트 계획표를 기반으로 하는 웹커뮤니티입니다. 만다라트(Mandalart)는 Manda(본질의) + la(달성, 성취) + art(기술)의 합성어로 본질을 깨닫는 기술, 목적을 달성하는 기술을 뜻합니다. 같은 목표를 가지고 있는 동료들과 함께 방향을 점검하고, 계획을 지켜나가세요!",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/4xn0JziN_-g/maxresdefault.jpg",
      YEAR: "2019-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/4xn0JziN_-g",
        },
      ],
    },
    {
      TITLE: "Snap Point",
      SUBTITLE: "",
      TEAM_NAME: "Jitterbug",
      PEOPLE: "오중균, 김창영",
      IDEA: "Snap 으로 PowerPoint를 제어한다는 단순한 아이디어에서 출발한 머신러닝 프로젝트입니다. Snap 소리를 내면 스페이스바를 단축키로 사용하는 모든 프로그램에서 제어가 가능합니다.",
      SKILLS: "",
      BG_IMAGE: "https://img.youtube.com/vi/7zFZIevBKXk/sddefault.jpg",
      YEAR: "2019-2",
      LINKS: null,
      INTRODUCTION: [
        {
          TYPE: "video",
          LINK: "https://youtu.be/7zFZIevBKXk",
        },
      ],
    },
  ],
};

export { PORTFOLIO };

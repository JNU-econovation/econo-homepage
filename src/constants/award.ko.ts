export interface Award {
  YEAR: string;
  DATA: {
    TITLE: string;
    AWARDS: string[];
    PEOPLE: string[];
  }[];
}

const AWARDS: Award[] = [
  {
    YEAR: "2023",
    DATA: [
      {
        TITLE: "2023 AI COSS 겨울 해커톤",
        AWARDS: ["대상", "동상"],
        PEOPLE: [
          "이서현, 이규민, 박영규, 이시현",
          "김서하, 박수현, 임채승, 최명선",
        ],
      },
      {
        TITLE: "제 1회 메타버스 인문콘텐츠 공모전",
        AWARDS: ["우수상"],
        PEOPLE: ["이시현"],
      },
      {
        TITLE: "제 4회 프로그래밍 경진대회",
        AWARDS: ["은상"],
        PEOPLE: ["김건형, 김근성"],
      },
      {
        TITLE: "제 9회 광주광역시 공공데이터 활용 창업경진대회",
        AWARDS: ["아이디어 기획 부문 장려상"],
        PEOPLE: ["박준수"],
      },
      {
        TITLE: "제 4회 오아시스 해커톤",
        AWARDS: ["최우수상"],
        PEOPLE: ["박준수, 김근성, 김지민, 조배경"],
      },
      {
        TITLE: "2023 AI 융합 문제발굴 산학연계 해커톤",
        AWARDS: ["은상", "동상"],
        PEOPLE: ["김가연, 이승건, 김다영, 이시현, 김동완", "김건형, 김종민"],
      },
    ],
  },
  {
    YEAR: "2022",
    DATA: [
      {
        TITLE: "2022 전남대학교 메이커 스타트업 경진대회",
        AWARDS: ["동상"],
        PEOPLE: ["이서현"],
      },
      {
        TITLE: "2022년 캡스톤디자인 경진대회",
        AWARDS: ["동상"],
        PEOPLE: ["김수민"],
      },
      {
        TITLE: "2022년 Capstone Design 경진대회",
        AWARDS: ["대상"],
        PEOPLE: ["김수민"],
      },
      {
        TITLE: "제 2회 전남대학교 SW프로그래밍 경진대회",
        AWARDS: ["금상", "장려상"],
        PEOPLE: ["임채승", "이윤성"],
      },
      {
        TITLE: "2022 SW 중심대학 공동해커톤",
        AWARDS: ["후원기업상(OSBC상)"],
        PEOPLE: ["김서하, 이윤성"],
      },
      {
        TITLE: "제 3회 프로그래밍 경진대회",
        AWARDS: ["은상", "우수상"],
        PEOPLE: ["임채승", "권순찬"],
      },
      {
        TITLE: "SW동아리 발굴 및 지원 프로그램",
        AWARDS: ["은상", "우수상"],
        PEOPLE: ["김민주, 김현지, 성윤아, 채상엽", "권순찬, 경주원"],
      },
      {
        TITLE: "제 4회 한국인 감정인식 국제경진대회",
        AWARDS: ["동상"],
        PEOPLE: ["이도연"],
      },
      {
        TITLE: "제 3회 오아시스 해커톤",
        AWARDS: ["최우수상"],
        PEOPLE: ["김서하, 임채승, 최명선, 황지우"],
      },
      {
        TITLE: "2022년 2학기 전남대학교 자유학기제 성과보고회",
        AWARDS: ["우수상(전남대 총장상)"],
        PEOPLE: ["김현지, 임채승, 채상엽, 최명선"],
      },
      {
        TITLE: "제 4회 구름톤",
        AWARDS: ["대상"],
        PEOPLE: ["이시현"],
      },
      {
        TITLE: "제 20회 2022 전남대학교 창업아이템 경진대회",
        AWARDS: ["장려상"],
        PEOPLE: ["이시현, 임수미, 장현지, 황대선"],
      },
      {
        TITLE: "2022 공학수기공모전",
        AWARDS: ["대상"],
        PEOPLE: ["이시현"],
      },
      {
        TITLE: "2022학년도 1학기 공과대학 'Job-Road Map 설계 프로그램'",
        AWARDS: ["우수상"],
        PEOPLE: ["장현지"],
      },
      {
        TITLE: "2022 한국과총 로컬크리에이터 경진대회",
        AWARDS: ["우수상"],
        PEOPLE: ["장현지"],
      },
    ],
  },
  {
    YEAR: "2021",
    DATA: [
      {
        TITLE: "제3회 전남대학교 이노베이션 해커톤 대회",
        AWARDS: ["금상", "은상", "후원사 특별상(닷넷소프트)"],
        PEOPLE: [
          "이서현, 이혜은, 홍찬의",
          "김상엽, 김현지, 김서하",
          "김송아, 김유리, 나영주, 류현지",
        ],
      },
      {
        TITLE: "제1회 전남대학교 SW프로그래밍 경진대회",
        AWARDS: ["은상, 장려상"],
        PEOPLE: ["김송아, 임채승", "권순찬, 진성호"],
      },
      {
        TITLE: "2021 전남대학교 메이커 스타트업 경진대회",
        AWARDS: ["최우수상", "우수상"],
        PEOPLE: ["이서현", "권순찬, 김송아, 이윤성, 류현지, 황지우"],
      },
      {
        TITLE: "제 19회 2021 전남대학교 창업아이템 경진대회",
        AWARDS: ["장려상"],
        PEOPLE: ["이서현"],
      },
      {
        TITLE: "총장명예학생 도전프로젝트",
        AWARDS: ["우수상"],
        PEOPLE: ["이서현"],
      },
      {
        TITLE: "홀트아동복지회 미혼한부모가족 인식개선 동영상 공모전",
        AWARDS: ["최우수상"],
        PEOPLE: ["류현지"],
      },
      {
        TITLE: "부산광역시 Medical Hack",
        AWARDS: ["최우수상, 테크노파크원장상"],
        PEOPLE: ["김시형"],
      },
      {
        TITLE: "SAN JOSE STATE UNIVERSITY SV innovation & StartUp Grand Prize",
        AWARDS: ["대상"],
        PEOPLE: ["김시형"],
      },
      {
        TITLE: "공학교육혁신센터 기초창의설계경진대회",
        AWARDS: ["대상"],
        PEOPLE: ["김시형"],
      },
      {
        TITLE: "전남대학교 정보전산원 e포트폴리오 경진대회",
        AWARDS: ["금상"],
        PEOPLE: ["김시형"],
      },
      {
        TITLE: "2021 전남대학교 하베스트 페스티벌 심포지엄",
        AWARDS: ["최우수상"],
        PEOPLE: ["나영주"],
      },
      {
        TITLE: "2021 농식품청년스토리텔링 디자인단",
        AWARDS: ["장려상"],
        PEOPLE: ["김정은"],
      },
      {
        TITLE: "42서울 piscine제작 해커톤",
        AWARDS: ["제비꽃상"],
        PEOPLE: ["탁민경"],
      },
      {
        TITLE: "한국정보보호학회 호남지부 추계학술대회 포스터발표",
        AWARDS: ["특별상"],
        PEOPLE: ["김다애"],
      },
      {
        TITLE: "2021 광주/전남이 읽고 톡 하다 독서클럽",
        AWARDS: ["우수상"],
        PEOPLE: ["강다은"],
      },
    ],
  },
  {
    YEAR: "2020",
    DATA: [
      {
        TITLE: "제2회 전남대학교 이노베이션 해커톤 대회",
        AWARDS: ["대상", "금상", "은상", "KT특별상"],
        PEOPLE: ["김창영, 정지은", "탁민경", "황지우", "김상엽"],
      },
      {
        TITLE: "제6회 Creative Space G A.I & IoT 해커톤",
        AWARDS: ["대상"],
        PEOPLE: ["김성혁"],
      },
      {
        TITLE: "네이버 커넥트재단 부스트코스 SW교육",
        AWARDS: ["최우수동아리상"],
        PEOPLE: ["김규란, 김종근, 안서진, 최진영"],
      },
      {
        TITLE: "제 8회 글로벌 캡스톤 디자인 경진대회",
        AWARDS: ["장려상"],
        PEOPLE: ["김규란, 안서진"],
      },
      {
        TITLE: "인공지능(AI) 문제해결 아이디어 공모전",
        AWARDS: ["장려상"],
        PEOPLE: ["김규란, 김창영, 안서진, 정지은"],
      },
      {
        TITLE: "2020 오픈소스 컨트리뷰톤",
        AWARDS: ["장려상"],
        PEOPLE: ["배종진"],
      },
      {
        TITLE: "제5회 광주글로벌게임센터 인디스타즈",
        AWARDS: ["우수상"],
        PEOPLE: ["김영우"],
      },
      {
        TITLE: "제 4회 정부혁신제안 끝장개발대회",
        AWARDS: ["인기상"],
        PEOPLE: ["박재현"],
      },
      {
        TITLE: "제 1회 오아이스 해커톤",
        AWARDS: ["오아시스 특별상"],
        PEOPLE: ["김규란, 안서진"],
      },
      {
        TITLE: "광주 인공지능사관학교",
        AWARDS: ["최우수상", "우수상"],
        PEOPLE: ["안서진", "김규란"],
      },
      {
        TITLE: "제 1회 CNU X-coprs 페스티벌",
        AWARDS: ["장려상"],
        PEOPLE: ["김정인"],
      },
      {
        TITLE: "제 35회 제어.로봇.시스템학회 학술 학부생 논문 경진대회",
        AWARDS: ["학부생 논문상"],
        PEOPLE: ["김정인"],
      },
      {
        TITLE: "2020 홀트아동복지회 미혼한부모가정 인식개선 공모전",
        AWARDS: ["최수우상"],
        PEOPLE: ["류현진"],
      },
      {
        TITLE: "전남대학교 LINK+페스티벌 CNU-창업옥션",
        AWARDS: ["동상"],
        PEOPLE: ["류현진"],
      },
      {
        TITLE: "한국장학재단 모의피칭 발표",
        AWARDS: ["장려상"],
        PEOPLE: ["류현진"],
      },
      {
        TITLE: "2020 전남대학교 LINK+ 페스티벌 CNU-창업옥션",
        AWARDS: ["동상"],
        PEOPLE: ["류현진"],
      },
      {
        TITLE: "2020 LINK+ 아이디어리얼라이즈 공모전",
        AWARDS: ["최우수상"],
        PEOPLE: ["류현진"],
      },
      {
        TITLE: "2020 전남대학교 LINK+ 페스티벌 CNU-창업옥션",
        AWARDS: ["동상"],
        PEOPLE: ["류현진"],
      },
    ],
  },
];

export { AWARDS };

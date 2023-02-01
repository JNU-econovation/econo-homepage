function Hackathon2021Faq() {
  const chatParam = [
    '#kakao_chat', '_WXetxb' // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  ]
  // Kakao.Channel.createChatButton({chatParam});
  return (
    <div>
<div id="mydiv" data-test="<%= test %>"></div>
<script src="assets/js/kakao.js"></script>
<script>
  var test = document.getElementById("mydiv").dataset.test;
  // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
  Kakao.init(test);
  Kakao.Channel.createChatButton({chatParam});
</script>

<section>
  <h2>제 2회 Innovation Hackathon FAQ</h2>
  <header>
    <h3>Q. 해커톤(Hackathon)은 무엇인가요?</h3>
    <blockquote>
      A. 해커톤(Hackathon)은 해킹(Hacking)과 마라톤(Marathon)의 합성어입니다.
      소프트웨어 개발 분야의 프로그래머나 그래픽 디자이너, UI 설계자 등 다양한
      분야의 전문가들 혹은 지망하는 사람들이 하나의 문제상황을 해결하기 위해
      모든 지식과 창의력을 총동원하여 자신의 전문성을 뽐낼 수 있는 행사라고 할
      수 있습니다. 또한, 다양한 분야의 사람과 협업하여 짧은 기간 안에 프로젝트의
      핵심을 완성하는 몰입의 장이기도 합니다.
    </blockquote>
  </header>
  <hr />
  <header>
    <h3>Q. 온라인 해커톤은 어떤 식으로 진행되나요?</h3>
    <blockquote>
      A. 우선 코로나 19의 여파로 해커톤을 온라인으로 개최하게 된 점 양해해
      주셔서 감사합니다. 이번 해커톤을 온라인으로 진행하는 만큼 앞으로
      합격자에게 공지될 행사일정과 진행방법을 잘 숙지해주셔야 합니다. 해커톤
      개회식과 폐회식을 비롯한 다양한 공통일정은 구글 meet으로 진행되며 행사
      내내 공지사항 전달을 위해 슬랙을 사용합니다. 다수 인원이 모이는 상황을
      피하고자 온라인으로 개최되나, 구성된 해커톤 팀원들끼리 행사당일 자발적으로
      모여서 참여하셔도 무방합니다.
    </blockquote>
  </header>
  <hr />

  <header>
    <h3>Q. 해커톤 기간 내에 개발을 끝마쳐야 하나요?</h3>
    <blockquote>
      A. 본 해커톤은 일정 종료 시점까지 실제로 개발 구현을 마쳐야 할 필요는
      없습니다. 아이디어의 구체성과, 어떤 데이터와 방법으로 실제 구현이
      가능할지를 설득력 있게 구성하는 것이 매우 중요합니다. 그러나 어느 정도의
      프로토타입 개발까지 마치신다면 심사결과에 큰 가산점을 얻게 되며, 자세한
      심사기준은
      <a>심사기준</a>를 참고해주시기 바랍니다.
    </blockquote>
  </header>
  <hr />

  <header>
    <h3>Q. 팀은 보통 어떻게 구성되나요?</h3>
    <blockquote>
      A. 개별 지원후 8월 12일 사전 모임을 가집니다. 그 때 진행하는 팀 빌딩
      프로그램을 통해 팀을 짤 수 있습니다. 만약 지인과 팀을 짜고 싶다면 지인끼리
      미리 이야기를 나누어 사전 모임 당일 혹은 그 전날까지 운영팀에게 연락
      주시면 됩니다.
    </blockquote>
  </header>
  <hr />

  <header>
    <h3>Q. 사전 모임에는 꼭 참가해야 하나요?</h3>
    <blockquote>
      A. 사전 모임에서는 지원자들끼리 온라인으로 만나 자신을 소개하고 마음이
      맞는 사람들끼리 모여 팀을 구성할 수 있는 프로그램을 제공합니다. 팀 빌딩
      방법은 합격자 발표 이후 자세한 안내가 나갈 예정입니다. 부득이한 사정으로
      팀 빌딩 사전모임에 참여하지 못하시는 지원자는 운영팀이 임의로 팀 매칭을 해
      드리나, 스스로 멤버를 모아 맘에 드는 팀을 결성하는 것부터가 주체적이고
      즐거운 해커톤의 시작이라는 점! 알려 드립니다.
    </blockquote>
  </header>
  <hr />

  <header>
    <h3>Q. 개발을 못해도 지원할 수 있나요?</h3>
    <blockquote>
      A. 이노베이션 해커톤은 기획자, 개발자, 디자이너가 한 팀이 되어 협업하는
      자리입니다. 따라서, 개발이 아니더라도 참가자의 능력에 따라 기획, 디자인의
      포지션으로 참여하실 수 있습니다. 제 2회 이노베이션 해커톤은 “아이디어의
      방향성을 제시할” 기획자, “기획안을 실현시킬” 개발자, “서비스의 오감적
      만족을 설계할” 디자이너 여러분들을 기다립니다.
    </blockquote>
  </header>
  <hr />

  <div style={{'text-align': 'center'}}>
    <h2>이노베이션 해커톤 채널</h2>
    <h4 style={{'margin-top': '-20px'}}>
      그 외 궁금한 사항은 이 카카오 채널을 이용해 주세요.
    </h4>
  </div>

  <footer class="major">
    <ul class="actions special">
      <li>
        <button id="kakao_chat"></button>
        {/* <!-- <a
          href="https://open.kakao.com/o/g5PgWrZb"
          class="button"
          style="background: rgba(247, 230, 0, 0.979);"
          ><strong style="color: rgba(60, 30, 30, 1); font-weight: 700;"
            >카카오톡 오픈채팅방 가기</strong
          ></a
        > --> */}
      </li>
    </ul>
  </footer>
</section>
</div>
);
}

export default Hackathon2021Faq;

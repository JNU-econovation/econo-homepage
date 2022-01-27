import Faq from './faq'

function Hackathon2021Component() {

  return (
<div id="main" class="wrapper style1">
  <div class="container">
    <header class="major">
      <h2>제3회 Innovation Hackathon</h2>
      <p>행사 개요</p>
    </header>

    <section
      style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}}
    >
      <div id="mobile_btn">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf5fFzvDgMooGcPcVKAqkFK_u0GX92Cj0gcmfkyrOrmwSClCQ/viewform?usp=sf_link"
          target="_blank"
          class="mobile_btn_free"
          >해커톤 지원하기</a
        >
      </div>

      <div style={{'margin-bottom': '2rem'}}>
        <a id="linkbutton" href="#일정">일정</a>
        <a id="linkbutton" href="#심사기준">심사기준</a>
        <a id="linkbutton" href="#FAQ">FAQ</a>
      </div>
      <img src="assets/21_hackathon.png" width="100%" />
      <br />
      <br />
      <section style={{'width': '100%'}}>
        <h2>Trigger your inner HIP! (Happiness, Innovation, Passion)</h2>
        <blockquote>
          코로나 19 상황이 장기화됨에 따라 우리 사회에 언택트 시대가 새로이 열리고 있습니다. MZ 세대들은 SNS, AR, VR, 화상회의 등 언택트 플랫폼에 빠르게 적응하고 있고, 나아가 대학, 회사에서도 재택으로 업무를 진행하는 시스템을 구축하고 있습니다. 이노베이션 해커톤은 시대의 변화에 앞장서서 전남대학교 학생들이 언택트 플랫폼에 대한 아이디어와 소프트웨어 기술력을 나누며 발전할 기회를 제공하여 유의미한 결과물을 도출하고자 합니다.
        </blockquote>

        <h3>
          주제
        </h3>
        <h4>
          "언택트 시대를 주도하는 MZ 세대를 위한 힙한 서비스"
        </h4>
        <hr />
      </section>
      <section id="일정">
        <br />
        <br />
      </section>
      <section style={{'width': '100%'}}>
        <h2>해커톤 일정</h2>
        <ul>
          <li><h3>지원기간 : 7월 1일 (목) ~ 8월 8일 (일) 23:59</h3></li>
          <li><h3>서류심사 : 8월 8일 (일) ~ 8월 9일 (월)</h3></li>
          <li><h3>결과발표 : 8월 9일 (월) 개별연락</h3></li>
          <li><h3>사전 모임 및 팀빌딩 데이 : 8월 10일 (화) ~ 8월 11일 (수)</h3></li>
          <li><h3>웰컴 킷 제공 기간 : 8월 23일 (월) ~ 8월 24일 (화)</h3></li>
          <li>
            <h3>
              대회당일:
              <span style={{'color': '#e44c65'}}>8월 25일(수) ~ 8월 27일(금)</span>
            </h3>
          </li>
        </ul>
        <hr />
      </section>
      <section>
        <br />
        <br />
      </section>
      <section style={{'width': '100%'}}>
        <h2 id="심사기준">심사기준</h2>
        <h3>주제 연관성</h3>
        <ul>
          <li><h4>언택트 사회를 고려한 서비스 아이디어인가?</h4></li>
          <li><h4>keyword를 고려한 서비스 아이디어인가?</h4></li>
          <li><h4>MZ세대 (10대와 20대)의 요구에 부합하는가?</h4></li>
        </ul>
        <h3>혁신</h3>
        <ul>
          <li><h4>기존 서비스와 유의미한 차별점이 존재하는가?</h4></li>
          <li><h4>실생활에서 얼마나 유용하게 사용할 수 있는가?</h4></li>
          <li><h4>최근에 대두된 기술을 사용하였는가?</h4></li>
        </ul>
        <h3>협업</h3>
        <ul>
          <li><h4>github를 적절히 사용하였는가?</h4></li>
          <li><h4>필참 행사에 모두 참여하였는가?</h4></li>
        </ul>
        <h3>완성도</h3>
        <ul>
          <li><h4>기획, 디자인, 개발적 요소가 적절히 배합되었는가?</h4></li>
          <li><h4>프로토타입이 기획의 의도대로 동작하는가?</h4></li>
          <li><h4>기획 및 디자인이 짜임새가 있는가?</h4></li>
          <li><h4>실제 프로그래밍을 통해 프로토타입을 개발하였는가?</h4></li>
        </ul>
        <h3>발표력</h3>
        <hr />
      </section>
      <section id="FAQ">
        <br />
        <br />
      </section>
      <Faq />
    </section>
  </div>
</div>
  );
}

export default Hackathon2021Component;


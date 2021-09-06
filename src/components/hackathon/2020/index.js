import Faq from './faq'

function Hackathon2020Component() {

  return (
<div id="main" class="wrapper style1">
  <div class="container">
    <header class="major">
      <h2>제 2회 Innovation Hackathon</h2>
      <p>행사 개요</p>
    </header>

    <section
      style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}}
    >
      <div id="mobile_btn">
        <a
          href="https://docs.google.com/forms/d/1JxbR8-Nvo8UGfnxpHFTsNAwkPv-BfbI7TFGeoQXYwz4/viewform?edit_requested=true"
          class="mobile_btn_free"
          >해커톤 지원 하기</a
        >
      </div>

      <div style={{'margin-bottom': '2rem'}}>
        <a id="linkbutton" href="#일정">일정</a>
        <a id="linkbutton" href="#심사기준">심사기준</a>
        <a id="linkbutton" href="#FAQ">FAQ</a>
      </div>
      <img src="assets/20_hackathon.png" width="100%" />
      <br />
      <br />
      <section style={{'width': '100%'}}>
        <h2>코로나 19 그리고 해커톤</h2>
        <blockquote>
          현재 전 세계적으로 코로나 19로 인한 사회적 거리 두기가 일상처럼 자리를
          잡은 지 벌써 반년이 다 되어가고 있습니다. 그래서 우리의 삶은 대면에서
          비대면으로 멀어져가고 있고, 이러한 과정에서 다양한 진통이 있을 거라
          생각했지만 이러한 변화가 긍정적으로 작용한다는 내용이 속속들이
          올라가고 있습니다.
        </blockquote>
        <blockquote>
          비대면 서비스에 대한 needs가 높아지는 이때에, 전남대학교 학생들도
          해커톤을 통해 아이디어를 구체화 시킬 수 있도록 집중할 수 있는 자리를
          만들어보고자 이번 Innovation hackathon을 개최하게 되었습니다.
        </blockquote>

        <h3>
          주제
        </h3>
        <h4>
          "비대면 환경에서 빅테이터/클라우드 자원을 활용한 서비스 아이디어"
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
          <li><h3>지원기간: 6월 29일(월) ~ 8월 09일(일) 23:59</h3></li>
          <li><h3>서류심사: 8월 10일(월) ~ 8월 11일(화)</h3></li>
          <li><h3>결과발표: 8월 11일(화) 오전 중</h3></li>
          <li><h3>사전안내: 8월 12일(수)</h3></li>
          <li>
            <h3>
              대회당일:
              <span style={{'color': '#e44c65'}}>8월 26일(수) ~ 8월 28일(금)</span>
            </h3>
          </li>
        </ul>
        <hr />
      </section>
      <section id="심사기준">
        <br />
        <br />
      </section>
      <section style={{'width': '100%'}}>
        <h2>심사기준</h2>
        <h3>주제 연관성</h3>
        <ul>
          <li><h4>빅데이터나 클라우드를 적절히 활용하였는가?</h4></li>
          <li>
            <h4>비대면, 비접촉 환경에서 쓸 수 있는 서비스 아이디어인가?</h4>
          </li>
        </ul>
        <h3>혁신</h3>
        <ul>
          <li>
            <h4>최근에 대두된 기술들을 사용하였는가?</h4>
          </li>
          <li><h4>기존 서비스와 유의미한 차별점이 존재하는가?</h4></li>
          <li><h4>사람들에게 얼마나 유익하게 사용될 수 있는가?</h4></li>
        </ul>
        <h3>협업</h3>
        <h3>완성도</h3>
        <ul>
          <li><h4>기획과 디자인의 완성도</h4></li>
          <li><h4>실제 기술을 통해 프로토타입을 개발했는가?</h4></li>
          <li><h4>프로토타입이 기획의 의도대로 동작하는가?</h4></li>
          <li>
            <h4>
              기획, 디자인, 개발적 요소가 적절히 완성도 있게 배합되었는가?
            </h4>
          </li>
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

export default Hackathon2020Component;
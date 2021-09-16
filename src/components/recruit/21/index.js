function Recruit21Component() {
return (<div id="main" className="wrapper style1">
  <div className="container">
    <header className="major pur">
      <h2>2021-2 ECONOVATION RECRUIT</h2>
    </header>

    <section style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}}>
      <div id="mobile_btn">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScTw_UunjguPh1MXna3pWocVchx91Z_zM0AY00IDDj2oY0_Ng/viewform?usp=sf_link" className="mobile_btn_free"
          style={{'background-color': '#1F83C6'}}>Econovation 지원하기</a>
      </div>

      <div style={{'margin-bottom': '2rem'}}>
        <a id="linkbutton" href="#일정" style={{'color': '#1F83C6'}}>모집 일정</a>
        <a id="linkbutton" href="#지원절차" style={{'color': '#1F83C6'}}>지원 절차</a>
        <a id="linkbutton" href="/faq" style={{'color': '#1F83C6'}}>FAQ</a>
      </div>

      <iframe id="ytplayer" type="text/html" width="100%" height="700" src="https://www.youtube.com/embed/FfCsW6RaYSI"
        frameborder="0"></iframe>
      <br />

      <img src="assets/21_2_recruit.jpg" width="100%" />
      <br />
      <br />
      <section style={{'width': '100%'}}>
        <h2>Econovation 22기 신입회원 모집</h2>
        <blockquote>
          전남대학교 정보전산원 소속 개발 동아리 Econovation에서 어느덧
          <b className="hl-r202">22기</b>
          신입회원분들을 모집합니다. 다양한 전공의 학생들이 함께 모여 누구나
          즐겁게 코딩할 수있는 공간을 지향합니다. Econovation은 개발, 기획, 디자인
          등 IT 분야에 관심이 있는 모든 분들께 열려있습니다.
        </blockquote>

        <br />

        <h2>모집 분야</h2>
        <h4>
          Econovation에서는 웹, 애플리케이션, 게임, IoT, 머신러닝 등 모든
          개발분야와 IT관련 디자인/기획 분야에서 활동해 주실 22기 회원들을
          모집합니다.
        </h4>
        <ul>
          <li>웹 - 웹브라우저를 통해 사용자에게 제공되는 동작 및 기능</li>
          <li>
            애플리케이션 - Android/iOS 운영체제에서 동작하는 모바일 애플리케이션
          </li>
          <li>게임 - 일상의 소소한 즐거움이 되어주는 게임서비스</li>
          <li>IoT - 무선 통신을 통해 각종 사물을 연결하는 사물인터넷</li>
          <li>머신러닝 - 머신러닝을 포함한 인공지능 분야 모델링</li>
          <li>
            IT관련 디자인/기획 - IT서비스를 위한 기획과 UI 디자인 혹은 시스템
            디자인
          </li>
        </ul>
        <br />
        <hr />
      </section>
      <section id="일정">
        <br />
        <br />
      </section>
      <section style={{'width': '100%'}}>
        <h2>모집 일정</h2>
        <ul>
          <li>
            <h3>서류지원: 9월 6일(월) ~ 9월 22일(수) 23:59</h3>
          </li>
          <li>
            <h3 style={{'margin-bottom': '0'}}>
              온라인면접: 9월 26일(일) ~ 9월 28일(화)
            </h3>
            <div style={{'margin-bottom': '10px'}}>
              (서류 합격자에 한함, Google Meet)
            </div>
          </li>
          <li>
            <h3 style={{'margin-bottom': '0'}}>최종 합격자 발표: 9월 29일(수)</h3>
            <div style={{'margin-bottom': '10px'}}>(개별 공지)</div>
          </li>

          <li>
            <h3>22기 신입회원 OT: 9월 30일(목)</h3>
          </li>
        </ul>
        <br />
        <hr />
      </section>
      <section id="지원절차">
        <br />
        <br />
      </section>
      <section style={{'width': '100%'}}>
        <h2>지원 절차</h2>
        <ol>
          <li>
            <h3>econovation.kr 접속</h3>
          </li>
          <li>
            <h3>
              상단의
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScTw_UunjguPh1MXna3pWocVchx91Z_zM0AY00IDDj2oY0_Ng/viewform?usp=sf_link" className="recruit_a">지원하기</a>
              클릭
            </h3>
          </li>
          <li>
            <h3>양식에 맞게 질문에 답한 뒤 제출</h3>
          </li>
          <li>
            <h3>서류 합격 후 운영진 면접</h3>
          </li>
        </ol>
        <br />
        <hr />
      </section>

      <section style={{'width': '100%'}}>
        <br />
        <br />
        <h2>FAQ</h2>
        <ul>
          <li><h3><a href="/faq">FAQ 바로가기</a></h3></li>
        </ul>
        <br />
        <hr />
      </section>

      <div style={{'text-align': 'center'}}>
        <h2>카카오톡 채널</h2>
        <h4 style={{'margin-top': '-20px'}}>
          그 외 궁금한 사항은 카카오톡 채널을 이용해 주세요
        </h4>
      </div>

      <footer className="major">
        <ul className="actions special">
          <li>
            <button id="kakao_chat"></button>
            <a href="http://pf.kakao.com/_laTLs" className="button" style={{'background': 'rgba(247, 230, 0, 0.979)'}} target='_blank'><strong
                style={{'color': 'rgba(60, 30, 30, 1)', 'font-weight': '700'}}>카카오톡 채널 가기</strong></a>
          </li>
        </ul>
      </footer>
    </section>
  </div>
</div>
); 
}

export default Recruit21Component;
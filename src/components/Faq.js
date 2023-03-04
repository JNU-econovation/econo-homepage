function FaqComponent() {
  return (
    <div id="main" class="wrapper style1">
      <div class="container">
        <header class="major">
          <h2>FAQ</h2>
          <p>자주 묻는 질문</p>
        </header>

        {/* Text */}
        <section>
          <h2>에코노베이션 FAQ</h2>
          <header>
            <h3>Q. 에코노베이션에 들어가면 주로 어떤 활동을 하게되나요?</h3>
            <blockquote>
              A. 에코노베이션은 매 학기 한 가지 주제를 가지고 실제 동작하는
              서비스를 구현하는 프로젝트를 진행합니다. 단순히 기한만 정해져 있는
              프로젝트가 아니라 <b>의무적으로 매주 금요일</b>에 모여서
              프로젝트의 진행 상황과 공부한 내용을 공유하고 피드백을 주고받는
              시간을 가집니다. 한 학기동안 진행한 프로젝트는 DEV행사에서 성과를
              공유합니다.
            </blockquote>
          </header>
          <hr />

          <header>
            <h3>Q. 프로젝트팀은 어떻게 구성하나요?</h3>
            <blockquote>
              A. 첫 학기에는 지원하는 분야에 맞추어서 팀이 배정됩니다. 다음
              학기부터는 '팀 빌딩 세션'을 통해 각자 관심 있는 분야를 나누고 팀을
              꾸리게 됩니다.
            </blockquote>
          </header>
          <hr />

          {/* <header>
            <h3>Q. 저는 전공자가 아닌데 지원이 가능한가요?</h3>
            <blockquote>
              A. 에코노베이션의 모토는 '전공무관 IT 동아리'로 IT에 관심이 있다면
              누구나 지원이 가능합니다
            </blockquote>
          </header>
          <hr /> */}

          <header>
            <h3>Q. 에코노베이션은 학술활동만 하는 동아리인가요?</h3>
            <blockquote>
              A. 에코노베이션은 IT에 관심이 있는 사람들이 모인 <b>커뮤니티</b>
              입니다. 개발 프로젝트를 진행할 뿐만 아니라 회원들 간의 친목을
              유지하기 위해서 핼러윈 파티, 야유회 등 다양한 행사를 기획하고
              운영하고 있습니다.
            </blockquote>
          </header>
          <hr />

          {/* <header>
            <h3>Q. 개발자 외에도 뽑는 분야가 있나요?</h3>
            <blockquote>
              A. 저희는 저희는 개발자 외에 디자이너나 기획자들도 언제나 환영하는
              자세로 모집에 임하고 있습니다.
            </blockquote>
          </header>
          <hr /> */}

          {/* <header>
            <h3>Q. 개발에 대해서 가르쳐주는 동아리인가요?</h3>
            <blockquote>
              A. 에코노베이션의 메인 활동은 학기 초 기획한 프로젝트를 한 학기
              동안 개발해 나가는 팀 프로젝트입니다. 이 과정에서 그 프로젝트
              개발을 위해 필요한 공부를 자발적으로 해나갑니다. '멘토링'이라는
              제도가 있기는 하지만 개발자가 공부하다가 막히는 부분에서 도움을
              주거나, 혹은 경험에서 나오는 조언 등으로 좀 더 쉽게 개발할 수
              있도록 하는 제도이므로 스스로의 공부가 선행되어야 합니다.
            </blockquote>
          </header>
          <hr /> */}

          <header>
            <h3>
              Q. 에코노베이션 회원이 생각하는 에코노베이션의 장점은 무엇인가요?
            </h3>
            <blockquote>
              A. 회원들이 굉장히 열정적이기 때문에 시너지가 생기고, 다른
              회원들에게 도움을 주고 싶어하는 회원들이 많아서 좋은 정보와
              이야기를 들을 수 있습니다. 여러 학과의 사람들이 모여서 프로젝트를
              진행하기 때문에 시야를 넓힐 수 있고 다양한 에너지를 경험할 수
              있습니다.
            </blockquote>
          </header>
          <hr />

          {/* <header>
            <h3>Q. 모집 인터뷰는 어떻게 진행되나요?</h3>
            <blockquote>
              A. 전산원에 위치한 에코노베이션 동아리 방에서 1차 합격자에 한해
              모집 인터뷰가 대면으로 진행됩니다. 자세한 사항은 서류 합격자
              분들께 메일로 전송됩니다.
            </blockquote>
          </header>
          <hr /> */}

          <div style={{ "text-align": "center" }}>
            <h2>카카오톡 채널</h2>
            <h4 style={{ "margin-top": "-20px" }}>
              그 외 궁금한 사항은 카카오톡 채널을 이용해 주세요
            </h4>
          </div>

          <footer class="major">
            <ul class="actions special">
              <li>
                <a
                  href="http://pf.kakao.com/_laTLs"
                  class="button"
                  style={{ background: "rgba(247, 230, 0, 0.979)" }}
                  target="_blank"
                >
                  <strong
                    style={{ color: "rgba(60,30, 30,1)", "font-weight": "700" }}
                  >
                    카카오톡 채널 가기
                  </strong>
                </a>
              </li>
            </ul>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default FaqComponent;

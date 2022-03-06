function Navigation() {
  return (
    <header id="header">
      <h1 id="logo">
        <a href="/about">
          <img width="100px" src="images/logo-nav.png" alt="" />
        </a>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#">DEV</a>
            <ul>
              <li>
                <a href="/winter-dev-2022/" target="_blank">
                  Winter 2022
                </a>
              </li>
              <li>
                <a href="/summer-dev-2021" target="_blank">
                  Summer 2021
                </a>
              </li>
              <li>
                <a href="/winter-dev-2021">Winter 2021</a>
              </li>
              <li>
                <a href="/summer-dev-2020">Summer 2020</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">RECRUIT</a>
            <ul>
              <li>
                <a href="/recruit-2022-1">23기</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">SNS</a>
            <ul>
              <li>
                <a href="https://www.facebook.com/econo.jnu.ac.kr">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/cnu_econovation">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCepdmgc4w5EQIc1J0lqXVtA">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.medium.com/econovation">Medium</a>
              </li>
              <li>
                <a href="https://www.github.com/jnu-econovation">Github</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Hackathon</a>
            <ul>
              <li>
                <a href="/hackathon-2021">2021</a>
              </li>
              <li>
                <a href="/hackathon-2020">2020</a>
              </li>
              <li>
                <a href="/hackathon-2019">2019</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Portfolio</a>
            <ul>
              <li>
                <a href="/portfolio-2022-winter">Winter 2022</a>
              </li>
              <li>
                <a href="/portfolio-2021-summer">Summer 2021</a>
              </li>
              <li>
                <a href="/portfolio-2021-winter">Winter 2021</a>
              </li>
              <li>
                <a href="/portfolio-2020-summer">Summer 2020</a>
              </li>
              <li>
                <a href="/portfolio-2020-winter">Winter 2020</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a
              href="https://youtu.be/irk_4d08TWg"
              className="button primary"
              style={{ "background-color": "white", "font-weight": "bold" }}
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{
                  display: "flex",
                  "align-items": "center",
                  gap: "3px",
                  width: "100%",
                  "background-color": "white",
                  "font-weight": "bold",
                  color: "#0000FE",
                }}
              >
                Winter Dev 다시보기
              </div>
            </a>
          </li>
        </ul>
      </nav>
      {/*winterdev를 위해 임시로 버튼 색을 변경해 둔 것. 끝나면 style태그 빼기*/}
    </header>
  );
}

export default Navigation;

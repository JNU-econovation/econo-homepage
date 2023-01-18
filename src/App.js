import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import About from "./page/About";
import SummerDev2020 from "./page/dev/SummerDev2020";
import WinterDev2021 from "./page/dev/WinterDev2021";
import Recruit22 from "./page/recruit/22";
import Hackathon2021 from "./page/hackathon/2021";
import Hackathon2020 from "./page/hackathon/2020";
import Hackathon2019 from "./page/hackathon/2019";
import Portfolio2020Winter from "./page/portfolio/Portfolio2020Winter";
import Portfolio2020Summer from "./page/portfolio/Portfolio2020Summer";
import Portfolio2021Winter from "./page/portfolio/Portfolio2021Winter";
import Portfolio2021Summer from "./page/portfolio/Portfolio2021Summer";
import Portfolio2022Winter from "./page/portfolio/Portfolio2022Winter";
import Portfolio2023Winter from "./page/portfolio/Portfolio2022Winter";
import NotFound from "./page/NotFound";
import Faq from "./page/Faq";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/about_econo">
          <Redirect to="/about" />
        </Route>
        <Route exact path="/winter-dev-2021">
          <WinterDev2021 />
        </Route>
        <Route exact path="/summer-dev-2020">
          <SummerDev2020 />
        </Route>
        <Route exact path="/recruit-2022-2">
          <Recruit22 />
        </Route>
        <Route exact path="/hackathon-2021">
          <Hackathon2021 />
        </Route>
        <Route exact path="/hackathon-2020">
          <Hackathon2020 />
        </Route>
        <Route exact path="/hackathon-2019">
          <Hackathon2019 />
        </Route>
        <Route exact path="/portfolio-2020-winter">
          <Portfolio2020Winter />
        </Route>
        <Route exact path="/portfolio-2020-summer">
          <Portfolio2020Summer />
        </Route>
        <Route exact path="/portfolio-2021-winter">
          <Portfolio2021Winter />
        </Route>
        <Route exact path="/portfolio-2021-summer">
          <Portfolio2021Summer />
        </Route>
        <Route exact path="/portfolio-2022-winter">
          <Portfolio2022Winter />
        </Route>
        <Route exact path="/portfolio-2023-winter">
          <Portfolio2023Winter />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

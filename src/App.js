import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import About from './page/About'
import Recruit21 from './page/recruit/21'
import Hackathon2021 from './page/hackathon/2021'
import Hackathon2020 from './page/hackathon/2020'
import Hackathon2019 from './page/hackathon/2019'
import Faq from './page/Faq'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/recruit-2021-2">
          <Recruit21 />
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
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

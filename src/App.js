import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import About from './page/About'
import Recruit21 from './page/recruit/21'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/recruit-2021-1">
          <Recruit21 />
        </Route>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

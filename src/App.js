import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation, Link} from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './components/pages/Home';
import Main from './components/pages/Main';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path ='/'>
          <Home />
        </Route>
        <Route path ='/main'>
            <Main />
        </Route>
      </Switch>
    </Router>
    </>
  )
}
export default App;

import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';

import './styles/styles.scss';
import LandingPage from './components/LandingPage/LandingPage';

import * as routes  from "./constants/routes";

render((
  <Router>
    <App>
      <Switch>
        <Route exact path={routes.DEFAULT} component={Home}/>
        <Route path={routes.HELLOWORLD} component={HelloWorld}/>
        <Route path={routes.LANDING_PAGE} component={LandingPage}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));

import React from 'react';

import {
   BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router'

import Home from '../components/Home';

import history from '../history';

const App = () => {

  return (
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </ConnectedRouter>
  );
};

export default App;

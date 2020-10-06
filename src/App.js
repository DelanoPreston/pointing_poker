import React from 'react';
import { Switch, BrowserRouter as Route, Router } from 'react-router-dom';
import './App.css';
// import '@eigi/bluebird';

import Welcome from './views/Welcome';
import Login from './views/Login';
import Player from './views/Player';
import Observer from './views/Observer';

const App = () => {
  this.props.history.push('/welcome');

  return (
    <Router>
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/room/:room_id/player/:player_id" component={Player} />
        <Route path="/Login/:room_id/observer" component={Observer} />
      </Switch>
    </Router>
  );
};

export default App;

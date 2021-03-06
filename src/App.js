import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';

import Welcome from './views/Welcome';
import Login from './views/Login';
import CreateRoom from './views/CreateRoom';
import Player from './views/Player';
import Observer from './views/Observer';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Welcome} exact/>
        <Route path="/login" component={Login} />
        <Route path="/create_room" component={CreateRoom} />
        <Route path="/room/:room_id/player/:player_id" component={Player} />
        <Route path="/room/:room_id/observer" component={Observer} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

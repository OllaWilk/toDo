import React from 'react';
import Home from '../Home/HomeContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Info from '../Info/Info';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/info' component={Info} />
    </Switch>
  </BrowserRouter>
);

export default App;
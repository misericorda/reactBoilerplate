import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import {hot} from 'react-hot-loader';

const App = () => (
  <HashRouter>
    <Main>
      <Switch>
         {/* Use your components here like <Route exact path='/' component={Your component}/>*/}
      </Switch>
    </Main>
  </HashRouter>
);
export default module.hot ? hot(module)(App) : App

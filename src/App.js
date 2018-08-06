import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {hashHistory} from 'react-router';
import Main from './components/Main';
import {hot} from 'react-hot-loader';

const App = () => (
  <HashRouter history={hashHistory}>
    <Main>
      <Switch>
         {/* Use your components here like <Route exact path='/' component={Your component}/>*/}
      </Switch>
    </Main>
  </HashRouter>
);
export default module.hot ? hot(module)(App) : App

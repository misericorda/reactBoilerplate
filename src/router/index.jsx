import {Route, Redirect, Switch, Router} from 'react-router-dom'
import PageNotFound from '../containers/PageNotFound'
import Wrapper from '../containers/Wrapper'
import history from './history';

const AppRouter = () => {
  return (
    <Router history={history}>
      <Wrapper>
        <Switch>
          <Route exact path='/' component={() => <h1>Here should be your component. Set it in router/index.jsx.</h1>}/>
          <Route path='/test' component={() => <h1>Test page</h1>}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Wrapper>
    </Router>
  )
};
export default AppRouter

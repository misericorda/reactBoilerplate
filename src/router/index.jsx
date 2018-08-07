import {Route, Redirect, Switch, HashRouter} from 'react-router-dom'
import PageNotFound from '../containers/PageNotFound'
import Wrapper from '../containers/Wrapper'


const AppRouter = () => {
  return (
    <HashRouter>
      <Wrapper>
        <Switch>
          <Route exact path='/' component={() => <h1>Here should be your component. Set in in router/index.jsx</h1>}/>
          <Route path='/test' component={() => <h1>Test page</h1>}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Wrapper>
    </HashRouter>
  )
};
export default AppRouter

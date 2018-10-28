import {Route, Switch, Router} from "react-router-dom";
import PageNotFound from "../containers/PageNotFound";
import Main from "../containers/Main";
import history from "./history";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route exact path='/' component={() => <h1>Here should be your component. Set it in router/index.jsx.</h1>}/>
          <Route path='/test' component={() => <h1>Test page</h1>}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </Main>
    </Router>
  );
};

export default AppRouter;

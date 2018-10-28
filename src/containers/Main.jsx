import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {authLogIn, authLogOut} from "../store/actions/";
import { withRouter } from "react-router-dom";

class Main extends React.Component {
  render() {
    const {children, auth, authLogIn, authLogOut} = this.props;
    return (
      <div>
        <h4 className="text-center">Current user: {auth.user}</h4>
        <h5>{auth.isLoading? "Loading": ""}</h5>
        <button className="btn btn-primary btn-block" onClick={() => authLogIn("s", "s")}>Log in</button>
        <button className="btn btn-primary btn-block" onClick={authLogOut}>Log out</button>
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    authLogIn,
    authLogOut
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
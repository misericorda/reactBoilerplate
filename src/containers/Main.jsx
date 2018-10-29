import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {authLogIn, authLogOut} from "../store/actions/";
import {withRouter} from "react-router-dom";

import {Layout} from "antd";


import HeaderNav from "../components/navigation/HeaderNav";


class Main extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <Layout>
        <HeaderNav/>
        {children}
      </Layout>
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
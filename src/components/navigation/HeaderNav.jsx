import {Layout, Menu, Icon, Button} from "antd";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {authLogIn, authLogOut} from "../../store/actions/";
import {Link, withRouter} from "react-router-dom";

const {Header} = Layout;


const renderLoggedInMenu = ({auth: {isLoading}, authLogOut}) => {
  return (
    <Header className="d-flex justify-content-between">
      <CustomMenu>
        <Menu.Item key="1"><Link to="/public">Public Page</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/another">Another Page</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/404">Missing page</Link></Menu.Item>
      </CustomMenu>
      <CustomMenu direction="end">
        <Menu.Item key="1">
          <Button type="primary" onClick={authLogOut}>
            <Icon type={isLoading ? "loading" : "logout"}/>Logout
          </Button>
        </Menu.Item>
      </CustomMenu>
    </Header>
  );
};

const renderLoggedOutMenu = ({auth: {isLoading}, authLogIn}) => {
  return (
    <Header className="d-flex justify-content-end">
      <CustomMenu direction="end">
        <Menu.Item key="1">
          <Button type="primary" onClick={authLogIn}>
            <Icon type={isLoading ? "loading" : "login"}/>Login
          </Button>
        </Menu.Item>
      </CustomMenu>
    </Header>
  );
};

const CustomMenu = ({children, direction = "start"}) => (
  <Menu
    theme="dark"
    mode="horizontal"
    className={` flex-grow-1 d-flex lh64 justify-content-${direction}`}
    selectable={false}>
    {children}
  </Menu>
);

export const HeaderNav = props => props.auth.user ? renderLoggedInMenu(props) : renderLoggedOutMenu(props);


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderNav));
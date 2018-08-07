import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAppReady} from "../store/actions/app"
import { withRouter } from 'react-router-dom'

class Wrapper extends React.Component {
  render() {
    const {children, ready, toggleAppReady} = this.props;
    return (
      <div>
        <h4 className="text-center">App status: <i>{ready ? 'Ready' : 'Not Ready'}</i></h4>
        <button className="btn btn-primary btn-block" onClick={toggleAppReady}>Toggle</button>
        {children}
      </div>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    ready: state.app.appReady
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleAppReady,
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));
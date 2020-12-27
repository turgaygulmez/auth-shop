import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectProfile } from "../../store/self/reducer";
import { getSelf } from "../../store/self/actions";

class AuthProvider extends React.PureComponent {
  componentDidMount() {
    const { profile, location, history, onGetSelf } = this.props;

    if (!profile && location.pathname !== "/login") {
      // try to get self once
      onGetSelf().catch((ex) => {
        history.push("/login");
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { location, profile, history } = this.props;
    if (prevProps.location.pathname !== location.pathname && !profile) {
      history.push("/login");
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => ({
  profile: selectProfile(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGetSelf: () => dispatch(getSelf())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthProvider));

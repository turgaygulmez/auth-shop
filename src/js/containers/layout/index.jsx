import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logout } from "../../store/self/actions";

import { DefaultLayout } from "../../components/layouts";

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    const { onLogout, history } = this.props;
    onLogout().then(() => {
      history.push("/login");
    });
  }
  render() {
    const { children } = this.props;

    return <DefaultLayout children={children} onLogout={this.onLogout} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));

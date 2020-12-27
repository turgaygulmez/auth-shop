import React from "react";
import { connect } from "react-redux";

import { login } from "../../store/self/actions";
import { LoginPage } from "../../components/pages";

class Login extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(data) {
    const { onLogin, history } = this.props;

    onLogin({
      userName: data.target[0].value,
      password: data.target[1].value
    }).then(() => {
      history.push("/");
    });
  }

  render() {
    return <LoginPage onSubmit={this.onLogin} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

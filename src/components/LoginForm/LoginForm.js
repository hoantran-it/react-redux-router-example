import React from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import * as userActions from "actions/userActions";

class LoginForm extends React.Component {

  _onSubmit() {
    let username = this.refs.username.getValue();
    let password = this.refs.password.getValue();
    this.props.login(username, password);
  }

  render() {
    if (this.props.loggedIn) {
      browserHistory.push('/');
    }
    return (
      <div>
        <TextField hintText="Username" ref="username"/>
        <TextField hintText="Password" ref="password"/>
        <RaisedButton onTouchTap={e => this._onSubmit()} label="Login"/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.user.userInfo,
    loggedIn: state.user.loggedIn,
    isLoading: state.user.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(userActions.login(username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
import React from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import * as userActions from "actions/userActions";

class SignInForm extends React.Component {

  _onSubmit() {
    let username = this.refs.username.getValue();
    let password = this.refs.password.getValue();
    this.props.signIn(username, password);
  }

  render() {
    // if (this.props.signedIn) {
    //   browserHistory.goBack();
    // }
    return (
      <div>
        <TextField hintText="Username" ref="username"/>
        <br/>
        <TextField hintText="Password" ref="password"/>
        <br/>
        <RaisedButton label="Sign In" onTouchTap={() => this._onSubmit()}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.user.userInfo,
    signedIn: state.user.signedIn,
    isLoading: state.user.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (username, password) => dispatch(userActions.signIn(username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
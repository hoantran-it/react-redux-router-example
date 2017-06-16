import React from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import * as userActions from "actions/userActions";

class SignUpForm extends React.Component {

  _onSubmit() {
    let data = {
      "userName": this.refs.username.getValue(),
      "isMale": true,
      "email": this.refs.email.getValue(),
      "password": this.refs.password.getValue(),
      "displayName": this.refs.fullname.getValue(),
      "avatar": "http://i.imgur.com/3f8rZ1T.jpg",
      "birthday": 1490952925000
    }
    this.props.signUp(data);
  }

  render() {
    if (this.props.signedIn) {
      browserHistory.goBack();
    }
    return (
      <div>
        <TextField hintText="Full Name" ref="fullname"/>
        <br/>
        <TextField hintText="Username" ref="username"/>
        <br/>
        <TextField hintText="Email" ref="email"/>
        <br/>
        <TextField hintText="Password" ref="password"/>
        <br/>
        <TextField hintText="Confirm Password" ref="confirmPassword"/>
        <br/>
        <TextField hintText="Birthday" ref="birthday"/>
        <br/>
        <RaisedButton label="Sign Up" onTouchTap={() => this._onSubmit()}/>
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
    signUp: (data) => dispatch(userActions.signUp(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
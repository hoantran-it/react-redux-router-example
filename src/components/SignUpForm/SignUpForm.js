import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SignUpForm extends React.Component {
  render() {
    return (
      <div>
        <TextField hintText="Full Name"/>
        <br/>
        <TextField hintText="Username"/>
        <br/>
        <TextField hintText="Email"/>
        <br/>
        <TextField hintText="Password"/>
        <br/>
        <TextField hintText="Confirm Password"/>
        <br/>
        <TextField hintText="Birthday"/>
        <br/>
        <RaisedButton label="Sign Up"/>
      </div>
    )
  }
}

export default SignUpForm;
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <TextField hintText="Username"/>
        <TextField hintText="Password"/>
        <RaisedButton label="Login"/>
      </div>
    )
  }
}

export default LoginForm;
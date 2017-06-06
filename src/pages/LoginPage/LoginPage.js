import React from "react";
import TextField from 'material-ui/TextField';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <TextField hintText="Username"/>
        <TextField hintText="Password"/>
      </div>
    );
  }
}

export default LoginPage;
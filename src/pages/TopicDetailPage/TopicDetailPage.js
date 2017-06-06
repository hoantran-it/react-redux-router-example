import React from "react";
import TextField from 'material-ui/TextField';

class TopicDetailPage extends React.Component {
  render() {
    return (
      <div>
        <TextField hintText="Username"/>
        <br/>
        <TextField hintText="Email"/>
        <br/>
        <TextField hintText="Password" />
        <br/>
        <TextField hintText="Confirm Password" />
        <br/>
        <TextField hintText="Birthday" />
      </div>
    );
  }
}

export default TopicDetailPage;
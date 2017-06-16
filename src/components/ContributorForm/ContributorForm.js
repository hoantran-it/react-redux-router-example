import React from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import * as userActions from "actions/userActions";

class ContributorForm extends React.Component {

  _onSubmit() {
    console.log("create contributor");
  }

  render() {
    return (
      <div>
        <TextField hintText="Contributor Name" ref="contributorName"/>
        <br/>
        <TextField hintText="Avatar" ref="avatar"/>
        <br/>
        <RaisedButton label="Complete" onTouchTap={() => this._onSubmit()}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContributorForm);
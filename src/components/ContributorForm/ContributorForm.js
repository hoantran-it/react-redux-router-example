import React from "react";
import {injectIntl} from "react-intl";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {Checkbox} from "semantic-ui-react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import * as userActions from "actions/userActions";
import messages from "i18n/messages";


class ContributorForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {disabled: true};
  }

  _changeMode(data) {
    this.setState({
      disabled: !data.checked
    })
  }

  _onSubmit() {
    console.log("create contributor");
  }

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <div>
        <Checkbox toggle
                  label={formatMessage(messages.contributorPanel.hiddenLabel)}
                  onChange={(event, data) => this._changeMode(data)}/>
        <br/>
        <TextField disabled={this.state.disabled} hintText="Contributor Name" ref="contributorName"/>
        <br/>
        <TextField disabled={this.state.disabled} hintText="Avatar" ref="avatar"/>
        <br/>
        <RaisedButton disabled={this.state.disabled} label="Complete" onTouchTap={() => this._onSubmit()}/>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ContributorForm));
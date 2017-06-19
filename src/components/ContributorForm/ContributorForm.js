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
    // If contributor belongs to user, set user id for tracking
    if(this.props.id == "user") {
      this.objData = {
        userId: 1
      };
    } else {
      this.objData = {};
    }
    // Disabled by default for signed in user
    // Enabled by default for guest can fill form
    if (this.props.hasHiddenOpt) {
      this.state = {disabled: true};
    } else {
      this.state = {disabled: false};
    }

  }

  _onChange(id, data) {
    if(id == "isHidden"){
      this.setState({
        disabled: !data
      });
    }
    this.objData[id] = data;
    this.props.onChange(this.props.id, this.objData);
  }

  render() {
    const {formatMessage} = this.props.intl;
    let hiddenCheckbox = "";
    if (this.props.hasHiddenOpt) {
      hiddenCheckbox = (
        <Checkbox id="isHidden"
                  toggle
                  label={formatMessage(messages.contributorPanel.hiddenLabel)}
                  onChange={(event, data) => this._onChange(data.id, data.checked)}/>
      );
    }
    return (
      <div>
        {hiddenCheckbox}
        <TextField id="name"
                   disabled={this.state.disabled}
                   hintText="Contributor Name"
                   onChange={(event, value) => this._onChange(event.target.id, value)}/>
        <br/>
        <TextField id="avatar"
                   disabled={this.state.disabled}
                   hintText="Avatar"
                   onChange={(event, value) => this._onChange(event.target.id, value)}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ContributorForm));
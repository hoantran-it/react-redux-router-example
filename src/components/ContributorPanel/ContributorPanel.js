import React from "react";
import {injectIntl} from "react-intl";
import {CardHeader} from "material-ui/Card";
import {Tabs, Tab} from 'material-ui/Tabs';
import {Checkbox} from 'semantic-ui-react'
import UserContributorPanel from "components/UserContributorPanel";
import GuestContributorPanel from "components/GuestContributorPanel";
import messages from "i18n/messages";


// We have 3 cases:
// - Signed in: 2 options
//   + Post by account
//   + Create contributor and use for creating topic
// - Not signed in: 2 options
//   + Sign in tab: return to Signed In case above
//   + Anonymous tab: user can input info and create topic anonymously
//   (this contributor doesn't have relationship to any account)
class ContributorPanel extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._changeTab = this._changeTab.bind(this);
    this.state = {
      role: "user",
    };
  }

  _changeTab = (value) => {
    this.setState({
      role: value,
    });
    this.props.onChange(this.props.id, this.state[value]);
  }

  _onChange(id, data) {
    this.setState({
      [id]: data
    });
    this.props.onChange(this.props.id, this.state[this.state.role]);
  }

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <Tabs value={this.state.role}
            onChange={this._changeTab}>
        <Tab label={formatMessage(messages.contributorPanel.userTab)}
             value="user">
          <UserContributorPanel id="user" onChange={this._onChange}/>
        </Tab>
        <Tab label={formatMessage(messages.contributorPanel.guestTab)}
             value="guest">
          <GuestContributorPanel id="guest" onChange={this._onChange}/>
        </Tab>
      </Tabs>
    )
  }
}

export default injectIntl(ContributorPanel);
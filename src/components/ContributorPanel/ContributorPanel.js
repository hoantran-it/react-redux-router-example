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
  render() {
    const {formatMessage} = this.props.intl;
    return (
      <Tabs>
        <Tab label={formatMessage(messages.contributorPanel.userTab)}>
          <UserContributorPanel/>
        </Tab>
        <Tab label={formatMessage(messages.contributorPanel.guestTab)}>
          <GuestContributorPanel/>
        </Tab>
      </Tabs>
    )
  }
}

export default injectIntl(ContributorPanel);
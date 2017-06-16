import React from "react";
import {injectIntl} from "react-intl";
import {CardHeader} from "material-ui/Card";
import {Tabs, Tab} from 'material-ui/Tabs';
import {Checkbox} from 'semantic-ui-react'
import messages from "i18n/messages";


class GuestContributorPanel extends React.Component {
  render() {
    const {formatMessage} = this.props.intl;
    return (
      <div>
        Guest
      </div>
    )
  }
}

export default injectIntl(GuestContributorPanel);
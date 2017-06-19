import React from "react";
import {injectIntl} from "react-intl";
import {CardHeader} from "material-ui/Card";
import {Tabs, Tab} from "material-ui/Tabs";
import {Checkbox} from "semantic-ui-react";
import ContributorForm from "components/ContributorForm";


class GuestContributorPanel extends React.Component {
  render() {
    const {formatMessage} = this.props.intl;
    return (
      <ContributorForm id={this.props.id}
                       hasHiddenOpt={false}
                       onChange={this.props.onChange}/>
    )
  }
}

export default injectIntl(GuestContributorPanel);
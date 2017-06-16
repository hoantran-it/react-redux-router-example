import React from "react";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import {CardHeader} from "material-ui/Card";
import {Tabs, Tab} from "material-ui/Tabs";
import {Checkbox} from "semantic-ui-react";
import SignInForm from "components/SignInForm";
import ContributorForm from "components/ContributorForm";
import messages from "i18n/messages";


class UserContributorPanel extends React.Component {

  _changeMode(data) {
  }

  render() {
    const {formatMessage} = this.props.intl;
    let content = "";
    if (this.props.signedIn) {
      content = (
        <div>
          <Checkbox toggle
                    label={formatMessage(messages.contributorPanel.hiddenLabel)}
                    onChange={(data) => this._changeMode(data)}/>
          <ContributorForm/>
        </div>
      );
    } else {
      content = <SignInForm/>;
    }

    return (
      <div>
        {content}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    signedIn: state.user.signedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(UserContributorPanel));
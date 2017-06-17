import React from "react";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import {CardHeader} from "material-ui/Card";
import {Tabs, Tab} from "material-ui/Tabs";
import SignInForm from "components/SignInForm";
import ContributorForm from "components/ContributorForm";


class UserContributorPanel extends React.Component {

  render() {
    let content = "";
    if (this.props.signedIn) {
      content = <ContributorForm/>;
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
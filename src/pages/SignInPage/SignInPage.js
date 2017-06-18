import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import SignInForm from "components/SignInForm";

class SignInPage extends React.Component {
  render() {
    if (this.props.signedIn) {
      browserHistory.goBack();
    }
    return (
      <SignInForm/>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
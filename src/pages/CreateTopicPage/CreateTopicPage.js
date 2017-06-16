import React from "react";
import TopicForm from "components/TopicForm";
import KeywordPanel from "components/KeywordPanel";
import ContributorPanel from "components/ContributorPanel";

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <TopicForm/>
        <KeywordPanel/>
        <ContributorPanel/>
      </div>
    );
  }
}

export default SignUpPage;
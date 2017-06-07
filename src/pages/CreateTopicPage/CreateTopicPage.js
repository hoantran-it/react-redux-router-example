import React from "react";
import TopicForm from "components/TopicForm";
import KeywordPanel from "components/KeywordPanel";
import ContributorInfo from "components/ContributorInfo";

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <TopicForm/>
        <KeywordPanel/>
        <ContributorInfo/>
      </div>
    );
  }
}

export default SignUpPage;
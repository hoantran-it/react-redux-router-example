import React from "react";
import TopicDetail from "components/TopicDetail";

class TopicDetailPage extends React.Component {
  render() {
    return (
      <TopicDetail topicId={this.props.params.topicId}/>
    );
  }
}

export default TopicDetailPage;
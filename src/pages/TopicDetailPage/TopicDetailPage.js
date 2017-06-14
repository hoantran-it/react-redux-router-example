import React from "react";
import TopicDetail from "components/TopicDetail";
import CommentPanel from "components/CommentPanel";

class TopicDetailPage extends React.Component {
  render() {
    let {topicId} = this.props.params;
    return (
      <div>
        <TopicDetail topicId={topicId}/>
        <CommentPanel topicId={topicId}/>
      </div>
    );
  }
}

export default TopicDetailPage;
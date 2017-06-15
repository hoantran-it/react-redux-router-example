import React from "react";
import TopicDetail from "components/TopicDetail";
import CommentPanel from "components/CommentPanel";

class TopicDetailPage extends React.Component {
  render() {
    let {topicId} = this.props.params;
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-8 col-md-8">
          <TopicDetail topicId={topicId}/>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-4">
          <CommentPanel topicId={topicId}/>
        </div>
      </div>
    );
  }
}

export default TopicDetailPage;
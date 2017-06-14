import React from "react";
import {Button, Form, Header} from "semantic-ui-react";
import CommentList from "components/CommentList";
import ReplyPanel from "components/ReplyPanel";

class CommentPanel extends React.Component {
  render() {
    return (
      <div>
        <Header as='h3' dividing>Comments</Header>
        <CommentList topicId={this.props.topicId}/>
        <ReplyPanel/>
      </div>
    )
  }
}

export default CommentPanel;
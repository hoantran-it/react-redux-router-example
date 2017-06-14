import React from "react";
import {Comment as CommentUI} from "semantic-ui-react";
import CommentGroup from "components/CommentGroup";

class Comment extends React.Component {
  render() {
    let cmtGroup = <CommentGroup/>;

    let {description, contributor} = this.props.comment;
    return (
      <CommentUI>
        <CommentUI.Avatar src={contributor.avatar}/>
        <CommentUI.Content>
          <CommentUI.Author as='a'>{contributor.name}</CommentUI.Author>
          <CommentUI.Metadata>
            <div>Today at 5:42PM</div>
          </CommentUI.Metadata>
          <CommentUI.Text>{description}</CommentUI.Text>
          <CommentUI.Actions>
            <CommentUI.Action>Reply</CommentUI.Action>
          </CommentUI.Actions>
        </CommentUI.Content>
      </CommentUI>
    )
  }
}

export default Comment;
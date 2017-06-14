import React from "react";
import {connect} from "react-redux";
import {Comment as CommentUI} from "semantic-ui-react";
import Comment from "components/Comment";
import * as commentActions from "actions/commentActions";


class CommentList extends React.Component {
  static defaultProps = {
    commentList: [],
    isLoading: true
  }
  componentDidMount() {
    this.props.getComments(this.props.topicId);
  }

  render() {
    return (
      <CommentUI.Group>
        {this.props.commentList.map((comment, index) =>
          <Comment key={index} comment={comment}/>
        )}
      </CommentUI.Group>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    commentList: state.comment.commentList,
    isLoading: state.comment.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: topicId => dispatch(commentActions.getComments(topicId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
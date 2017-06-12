import React from "react";
import {connect} from "react-redux";

import {Card} from "material-ui/Card";
import CircularProgress from "material-ui/CircularProgress";

import ContributorInfo from "components/ContributorInfo";
import TopicInfo from "components/TopicInfo";
import ReactionPanel from "components/ReactionPanel";
import * as topicActions from "actions/topicActions";


class TopicDetail extends React.Component {
  static defaultProps = {
    topic: {
      contributor: {}
    },
    isLoading: true
  }

  componentDidMount() {
    this.props.getTopicDetail(this.props.topicId);
  }

  render() {
    let content = "";
    if (this.props.isLoading) {
      content = <CircularProgress />;
    } else {
      content = (
        <Card>
          <ContributorInfo contributor={this.props.topic.contributor}/>
          <TopicInfo topic={this.props.topic}/>
          <ReactionPanel/>
        </Card>
      )
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
    topic: state.topic.topic,
    isLoading: state.topic.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicDetail: topicId => dispatch(topicActions.getTopicDetail(topicId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);
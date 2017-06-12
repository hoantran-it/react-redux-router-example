import React from "react";
import {connect} from "react-redux";

import {Card} from "material-ui/Card";

import ContributorInfo from "components/ContributorInfo";
import TopicInfo from "components/TopicInfo";
import ReactionPanel from "components/ReactionPanel";
import * as topicActions from "actions/topicActions";


class TopicDetail extends React.Component {
  static defaultProps = {
    topic: {
      contributor: {}
    }
  }

  componentDidMount() {
    this.props.getTopicDetail(this.props.topicId);
  }

  render() {
    return (
      <Card>
        <ContributorInfo contributor={this.props.topic.contributor}/>
        <TopicInfo topic={this.props.topic}/>
        <ReactionPanel/>
      </Card>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    topic: state.topic.topic
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicDetail: topicId => dispatch(topicActions.getTopicDetail(topicId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);
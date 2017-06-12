import React from "react";
import {connect} from "react-redux";

import TopicItem from "components/TopicItem";
import * as topicActions from "actions/topicActions";


class TopicList extends React.Component {
  static defaultProps = {
    topicList: []
  }

  componentDidMount() {
    this.props.getTopics("aaa");
  }

  render() {
    return (
      <div>
        {this.props.topicList.map((topic, index) =>
        <TopicItem key={index} topic={topic}/>
          )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topicList: state.topic.topicList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopics: filter => dispatch(topicActions.getTopics(filter))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
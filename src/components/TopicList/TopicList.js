import React from "react";
import {connect} from "react-redux";
import CircularProgress from "material-ui/CircularProgress";
import TopicItem from "components/TopicItem";
import * as topicActions from "actions/topicActions";


class TopicList extends React.Component {
  static defaultProps = {
    topicList: [],
    isLoading: true
  }

  componentDidMount() {
    this.props.getTopics("");
  }

  render() {
    let content = "";
    if (this.props.isLoading) {
      content = <CircularProgress />;
    } else {
      content = (
        <di>
          {this.props.topicList.map((topic, index) =>
            <TopicItem key={index} topic={topic}/>
          )}
        </di>
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
    topicList: state.topic.topicList,
    isLoading: state.topic.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopics: filter => dispatch(topicActions.getTopics(filter))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
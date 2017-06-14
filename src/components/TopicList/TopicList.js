import React from "react";
import {connect} from "react-redux";
import {Item} from 'semantic-ui-react'
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
        <Item.Group>
          {this.props.topicList.map((topic, index) =>
            <TopicItem key={index} topic={topic}/>
          )}
        </Item.Group>
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
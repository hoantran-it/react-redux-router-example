import React from "react";
import {connect} from "react-redux";

import CircularProgress from "material-ui/CircularProgress";
import TopicList from "components/TopicList";
import RaisedButton from "material-ui/RaisedButton";

import * as topicActions from "actions/topicActions";


class TopicPage extends React.Component {

  static defaultProps = {
    topicList: []
  }

  // eslint-disable-next-line
  constructor(props){
    super(props);
  }

  loadTopic(filter) {
    this.props.getTopics(filter);
  }

  render() {
    return (
      <div>
        <RaisedButton onTouchTap={e => this.loadTopic("aaa")} label="Sign Up"/>
        <TopicList topicList={this.props.topicList}/>
        <CircularProgress />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
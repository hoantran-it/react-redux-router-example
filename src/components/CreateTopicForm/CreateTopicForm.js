import React from "react";
import {injectIntl} from "react-intl";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import RaisedButton from "material-ui/RaisedButton";
import TopicForm from "components/TopicForm";
import KeywordPanel from "components/KeywordPanel";
import ContributorPanel from "components/ContributorPanel";
import * as topicActions from "actions/topicActions";


class CreateTopicForm extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(id, data) {
    this.setState({
      [id]: data
    });
  }

  _onSubmit() {
    let objectData = this.state.topic;
    objectData["contributor"] = {
      "name": "testing",
      "userId": this.props.userInfo.id,
      "isHidden": false
    };
    this.props.createTopic(objectData);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-8 col-md-8">
          <TopicForm id="topic" onChange={this._onChange}/>
          <KeywordPanel id="keyword"/>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-4">
          <RaisedButton label="Submit Topic" onTouchTap={() => this._onSubmit()}/>
          <br/>
          <br/>
          <ContributorPanel id="contributor"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.user.userInfo,
    newTopic: state.topic.newTopic
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTopic: (topic) => dispatch(topicActions.createTopic(topic))
  }
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(CreateTopicForm));
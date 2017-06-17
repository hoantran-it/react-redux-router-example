import React from "react";
import {injectIntl} from "react-intl";
import {connect} from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import TopicForm from "components/TopicForm";
import KeywordPanel from "components/KeywordPanel";
import ContributorPanel from "components/ContributorPanel";

class CreateTopicForm extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(childId, data) {
    this.setState({
      [childId]: data
    });
  }

  _onSubmit() {
    console.log("create contributor");
    console.log(this.state);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-8 col-md-8">
          <TopicForm childId="topic" onChange={this._onChange}/>
          <KeywordPanel/>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-4">
          <RaisedButton label="Submit Topic" onTouchTap={() => this._onSubmit()}/>
          <br/>
          <br/>
          <ContributorPanel/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(CreateTopicForm));
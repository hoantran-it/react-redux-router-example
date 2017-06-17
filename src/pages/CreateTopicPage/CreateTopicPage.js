import React from "react";
import {injectIntl} from "react-intl";
import {connect} from "react-redux";
import CreateTopicForm from "components/CreateTopicForm";


class CreateTopicPage extends React.Component {
  render() {
    return (
      <div>
        <CreateTopicForm/>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(CreateTopicPage));
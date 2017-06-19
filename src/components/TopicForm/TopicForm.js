import React from "react";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import TextField from "material-ui/TextField";


class TopicForm extends React.Component {

  constructor(props) {
    super(props);
    this.objData = {};
  }

  _onChange(id, value) {
    this.objData[id] = value;
    this.props.onChange(this.props.id, this.objData);
  }

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <div>
        <TextField id="title"
                   hintText="Title"
                   onChange={(event, newValue) => this._onChange(event.target.id, newValue)}/>
        <br/>
        <TextField id="description"
                   hintText="Description"
                   onChange={(event, newValue) => this._onChange(event.target.id, newValue)}/>
        <br/>
        <TextField id="image"
                   hintText="Image"
                   onChange={(event, newValue) => this._onChange(event.target.id, newValue)}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(TopicForm));
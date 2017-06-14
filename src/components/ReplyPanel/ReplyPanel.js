import React from "react";
import {Button, Form} from "semantic-ui-react";


class ReplyPanel extends React.Component {
  render() {
    return (
      <Form reply onSubmit={e => e.preventDefault()}>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
      </Form>
    )
  }
}

export default ReplyPanel;
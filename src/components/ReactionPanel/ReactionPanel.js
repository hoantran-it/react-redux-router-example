import React from "react";
import {CardActions} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";


class ReactionPanel extends React.Component {
  render() {
    return (
      <CardActions>
        <FlatButton label="Action1"/>
        <FlatButton label="Action2"/>
      </CardActions>
    )
  }
}

export default ReactionPanel;
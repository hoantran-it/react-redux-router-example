import React from "react";
import {Icon} from "semantic-ui-react";


class ReactionPanel extends React.Component {

  _react(item) {
    console.log(item);
  }

  render() {
    return (
      <div>
        <Icon circular link size="big" color="red" name="heartbeat" onTouchTap={e=>this._react("heartbeat")}/>
        <Icon circular link size="big" color="blue" name="thumbs up" onTouchTap={e=>this._react("like")}/>
        <Icon circular link size="big" color="green" name="als" onTouchTap={e=>this._react("als")}/>
        <Icon circular link size="big" color="yellow" name="deaf" onTouchTap={e=>this._react("deaf")}/>
        <Icon circular link size="big" color="violet" name="meh" onTouchTap={e=>this._react("meh")}/>
      </div>
    )
  }
}

export default ReactionPanel;
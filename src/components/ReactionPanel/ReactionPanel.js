import React from "react";
import {Button, Icon} from "semantic-ui-react";


class ReactionPanel extends React.Component {

  _react(item) {
    console.log(item);
  }

  render() {
    return (
      <div className="c-reaction-panel">
        <Button
          basic
          color="red"
          icon={<Icon size="big" color="red" name="heartbeat" onTouchTap={e=>this._react("heartbeat")}/>}
          label={{ as: 'a', basic: true, color: 'red', content: '3' }}
          labelPosition='right'/>
        <Button
          basic
          color="blue"
          icon={<Icon size="big" color="blue" name="thumbs up" onTouchTap={e=>this._react("like")}/>}
          label={{ as: 'a', basic: true, color: 'blue', content: '5' }}
          labelPosition='right'/>
        <Button
          basic
          color="green"
          icon={<Icon size="big" color="green" name="als" onTouchTap={e=>this._react("als")}/>}
          label={{ as: 'a', basic: true, color: 'green', content: '7' }}
          labelPosition='right'/>
        <Button
          basic
          color="yellow"
          icon={<Icon size="big" color="yellow" name="deaf" onTouchTap={e=>this._react("deaf")}/>}
          label={{ as: 'a', basic: true, color: 'yellow', content: '2' }}
          labelPosition='right'/>
        <Button
          basic
          color="violet"
          icon={<Icon size="big" color="violet" name="meh" onTouchTap={e=>this._react("meh")}/>}
          label={{ as: 'a', basic: true, color: 'violet', content: '1' }}
          labelPosition='right'/>
      </div>
    )
  }
}

export default ReactionPanel;
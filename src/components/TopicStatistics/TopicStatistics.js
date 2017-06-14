import React from "react";
import {Icon} from "semantic-ui-react";

class TopicStatistics extends React.Component {
  render() {
    return (
      <div>
        <table width="100%">
          <tr>
            <td>
              <Icon circular size="large" color="black" name="unhide"/>25
              <br/>
              <Icon circular size="large" color="black" name="comment outline"/>12
              <br/>
              <Icon circular size="large" color="black" name="user"/>5
            </td>
            <td>
              <Icon size="large" color="red" name="heartbeat"/>3
              <br/>
              <Icon size="large" color="blue" name="thumbs up" />
              <br/>
              <Icon size="large" color="green" name="als" />
              <br/>
              <Icon size="large" color="yellow" name="deaf" />
              <br/>
              <Icon size="large" color="violet" name="meh" />
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default TopicStatistics;
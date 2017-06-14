import React from "react";
import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import NotificationSignal from "components/NotificationSignal";

class TopHeader extends React.Component {

  render() {
    let children = (
      <div>
        <NotificationSignal/>
        <Avatar src="http://i.imgur.com/54sQ4lv.jpg"/>
      </div>
    );
    return (
      <AppBar
        title="i-think slogan"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        children={children}/>
    );
  }
}

export default TopHeader;
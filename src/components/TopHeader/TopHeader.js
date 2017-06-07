import React from "react";
import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import Notification from "components/Notification";

class TopHeader extends React.Component {

  render() {
    let children = (
      <div>
        <Notification/>
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
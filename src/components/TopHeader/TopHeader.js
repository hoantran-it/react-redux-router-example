import React from "react";
import AppBar from "material-ui/AppBar";
import NotificationSignal from "components/NotificationSignal";
import UserPanel from "components/UserPanel";
import Language from "components/Language";


class TopHeader extends React.Component {

  render() {
    let children = (
      <div>
        <NotificationSignal/>
        <Language/>
        <UserPanel/>
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
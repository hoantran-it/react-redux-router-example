import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

import Notification from 'components/Notification';

class TopHeader extends React.Component {

  render() {
    let avatar = <Avatar src="http://i.imgur.com/54sQ4lv.jpg"/>;
    let notification = <Notification/>;
    let children = (
      <div>
        {notification}
        {avatar}
      </div>
    );

    return (
      <div>
        <AppBar
          title="i-think slogan"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          children={children}/>
      </div>
    );
  }
}

export default TopHeader;
import React from "react";
import Avatar from "material-ui/Avatar";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


class UserPanel extends React.Component {

  _onLogout() {
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={<Avatar src="http://i.imgur.com/54sQ4lv.jpg"/>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onTouchTap={() => this._onLogout}/>
      </IconMenu>
    );
  }
}

export default UserPanel;
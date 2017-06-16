import React from "react";
import {Icon} from "semantic-ui-react";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


class Language extends React.Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={<Icon size="big" color="black" name="globe"/>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    );
  }
}

export default Language;
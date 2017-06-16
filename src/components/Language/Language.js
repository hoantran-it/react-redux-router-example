import React from "react";
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import LanguageIon from 'material-ui/svg-icons/action/language';

class Language extends React.Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><LanguageIon/></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Send feedback"/>
        <MenuItem primaryText="Settings"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
      </IconMenu>
    );
  }
}

export default Language;
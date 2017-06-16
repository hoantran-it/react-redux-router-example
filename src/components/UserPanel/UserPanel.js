import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import * as userActions from "actions/userActions";


class UserPanel extends React.Component {

  _onLogout() {
    this.props.signOut();
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><AccountIcon/></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onTouchTap={() => this._onLogout()}/>
      </IconMenu>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.user.userInfo,
    signedIn: state.user.signedIn,
    isLoading: state.user.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(userActions.signOut())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
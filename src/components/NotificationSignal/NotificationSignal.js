import React from "react";
import Drawer from "material-ui/Drawer";
import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import NotificationList from "components/NotificationList";


class NotificationSignal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <Badge
        badgeContent={10}
        secondary={true}
        badgeStyle={{top: 12, right: 12}}>
        <IconButton tooltip="4 notifications from your topics" onTouchTap={this.handleToggle}>
          <NotificationsIcon />
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          openSecondary={true}
          onRequestChange={(open) => this.setState({open})}>
          <NotificationList/>
        </Drawer>
      </Badge>
    )
  }
}

export default NotificationSignal;
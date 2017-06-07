import React from "react";
import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";

class NotificationItem extends React.Component {
  render() {
    return (
      <Badge
        badgeContent={10}
        secondary={true}
        badgeStyle={{top: 12, right: 12}}>
        <IconButton tooltip="4 notifications from your topics">
          <NotificationsIcon />
        </IconButton>
      </Badge>
    )
  }
}

export default NotificationItem;
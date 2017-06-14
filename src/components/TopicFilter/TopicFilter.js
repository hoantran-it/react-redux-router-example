import React from "react";
import {injectIntl} from "react-intl";
import FontIcon from "material-ui/FontIcon";
import {BottomNavigation, BottomNavigationItem} from "material-ui/BottomNavigation";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import messages from "messages";

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class TopicFilter extends React.Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          label={formatMessage(messages.topicFilter.recents)}
          icon={recentsIcon}
          onTouchTap={() => this.select(0)}
        />
        <BottomNavigationItem
          label={formatMessage(messages.topicFilter.favorites)}
          icon={favoritesIcon}
          onTouchTap={() => this.select(1)}
        />
        <BottomNavigationItem
          label={formatMessage(messages.topicFilter.hot)}
          icon={nearbyIcon}
          onTouchTap={() => this.select(2)}
        />
      </BottomNavigation>
    )
  }
}

export default injectIntl(TopicFilter);
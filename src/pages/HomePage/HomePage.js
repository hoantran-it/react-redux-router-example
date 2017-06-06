import React from "react";
import AppBar from 'material-ui/AppBar';

class HomePage extends React.Component {
  render() {
    return (
      <AppBar
        title="Home"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default HomePage;
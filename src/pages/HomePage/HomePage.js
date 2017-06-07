import React from "react";
import PersonalFilter from "components/PersonalFilter";
import TopicList from "components/TopicList";
import NewsFeed from "components/NewsFeed";
import NotificationDrawer from "components/NotificationDrawer";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <PersonalFilter/>
        <TopicList/>
        <NewsFeed/>
        <NotificationDrawer/>
      </div>
    );
  }
}

export default HomePage;
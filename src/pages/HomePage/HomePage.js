import React from "react";
import PersonalFilter from "components/PersonalFilter";
import TopicList from "components/TopicList";
import NewsFeed from "components/NewsFeed";
import NotificationDrawer from "components/NotificationDrawer";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8">
            <PersonalFilter/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-8 col-md-8">
            <TopicList/>
          </div>
          <div className="col-xs-6 col-sm-4 col-md-4">
            <NewsFeed/>
          </div>
        </div>
        <NotificationDrawer/>
      </div>
    );
  }
}

export default HomePage;
import React from "react";
import PersonalFilter from 'components/PersonalFilter';
import TopicList from 'components/TopicList';
import NewsFeed from 'components/NewsFeed';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <PersonalFilter/>
        <TopicList/>
        <NewsFeed/>
      </div>
    );
  }
}

export default HomePage;
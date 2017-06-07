import React from "react";
import TopicFilter from 'components/TopicFilter';
import TopicList from 'components/TopicList';
import CircularProgress from 'material-ui/CircularProgress';

class TopicPage extends React.Component {
  render() {
    return (
      <div>
        <TopicFilter/>
        <TopicList/>
        <CircularProgress />
      </div>
    );
  }
}

export default TopicPage;
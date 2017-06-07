import React from "react";
import CircularProgress from "material-ui/CircularProgress";
import TopicFilter from "components/TopicFilter";
import TopicList from "components/TopicList";

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
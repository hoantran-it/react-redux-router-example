import React from "react";
import {connect} from "react-redux";

import CircularProgress from "material-ui/CircularProgress";
import TopicList from "components/TopicList";


class TopicPage extends React.Component {

  render() {
    return (
      <div>
        <TopicList/>
        <CircularProgress />
      </div>
    );
  }
}

export default TopicPage;
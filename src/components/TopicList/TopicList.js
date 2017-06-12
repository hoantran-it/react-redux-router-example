import React from "react";
import TopicItem from "components/TopicItem";

class TopicList extends React.Component {
  render() {
    return (
      <div>
        {this.props.topicList.map((topic, index) =>
        <TopicItem key={index} topic={topic}/>
          )}
      </div>
    )
  }
}

export default TopicList;
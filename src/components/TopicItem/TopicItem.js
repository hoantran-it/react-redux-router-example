import React from "react";

import {Card} from "material-ui/Card";

import ContributorInfo from "components/ContributorInfo";
import TopicInfo from "components/TopicInfo";
import ReactionPanel from "components/ReactionPanel";


class TopicItem extends React.Component {
  render() {
    return (
      <Card>
        <ContributorInfo contributor={this.props.topic.contributor}/>
        <TopicInfo topic={this.props.topic}/>
        <ReactionPanel/>
      </Card>
    )
  }
}

export default TopicItem;
import React from "react";
import {Link} from "react-router";
import {Card} from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import {Image, Item} from 'semantic-ui-react'
import ContributorInfo from "components/ContributorInfo";
import TopicInfo from "components/TopicInfo";
import ReactionPanel from "components/ReactionPanel";


class TopicItem extends React.Component {
  render() {
    let {contributor, id, image, title, description, created} = this.props.topic;
    return (
      <Item>
        <Item.Image size='large' src={image}/>
        <Item.Content>
          <Item.Header as='a'><Link to={"/topic-detail/"+id}>{title}</Link></Item.Header>
          <Item.Meta><Avatar size={20} src={contributor.avatar}/>{created}</Item.Meta>
          <Item.Description>
            {description}
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default TopicItem;
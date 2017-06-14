import React from "react";
import {Link} from "react-router";
import Avatar from "material-ui/Avatar";
import {Item} from 'semantic-ui-react'
import TopicStatistics from "components/TopicStatistics";


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
          <Item.Extra><TopicStatistics/></Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default TopicItem;
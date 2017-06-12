import React from "react";
import {CardMedia, CardTitle, CardText} from "material-ui/Card";


class TopicInfo extends React.Component {
  render() {
    let {title, description, created} = this.props.topic;

    return (
      <div>
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}>
          <img src="http://i.imgur.com/J30CQiC.jpg" alt=""/>
        </CardMedia>
        <CardTitle title={title} subtitle={created}/>
        <CardText>
          {description}
        </CardText>
      </div>
    )
  }
}

export default TopicInfo;
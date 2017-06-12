import React from "react";
import {CardHeader} from "material-ui/Card";


class ContributorInfo extends React.Component {
  render() {
    let {name, avatar} = this.props.contributor;

    return (
      <CardHeader
        title={name}
        subtitle="Title of memmber"
        avatar={avatar}
      />
    )
  }
}

export default ContributorInfo;
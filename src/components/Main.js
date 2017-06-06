import React  from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
// import Avatar from 'material-ui/Avatar';
import Notification from 'components/Notification';

const Main = (props) => {
  // let avatar = <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />;
  let notification = <Notification/>;
  // let children = avatar + notification;
  return (
    <div>
      <AppBar
        title="Home"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        children = {notification}/>
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/book">Book</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Each smaller components */}
        {props.children}
      </div>
    </div>
  );
};

export default Main;
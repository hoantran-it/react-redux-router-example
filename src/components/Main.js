import React from 'react';
import {Link} from 'react-router';

import TopHeader from 'components/TopHeader';
import TopToolbar from 'components/TopToolbar';

const Main = (props) => {
  return (
    <div>
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
      <TopHeader/>
      <TopToolbar/>
      <div className="container">
        {/* Each smaller components */}
        {props.children}
      </div>
    </div>
  );
};

export default Main;

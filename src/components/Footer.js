import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><a href="#" title="menu">About</a></li>
            <li><a href="#" title="menu">Policies</a></li>
            <li><a href="#" title="menu">Site Map</a></li>
            <li><a href="#" title="menu">Help</a></li>
            <li><a href="#" title="menu">Contact us</a></li>
          </ul>
        </div>

        <div className="rights clearfix">
          <img src="images/logotype2.png" className="pull-left"/>
          <p>&copy;2015. Qulix Systems. All rights reserved.</p>
        </div>

      </footer>
    );
  }
}

export default Footer;
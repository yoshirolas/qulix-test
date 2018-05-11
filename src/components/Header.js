import React, { Component } from 'react';

class Header extends Component {
  
  render() {
    return (
      <header className="header">

        <div className="container">

          <div className="row">

            <div className="logoBlock">
              <a href="index.html">
                <img 
                  src="images/logotype.png" 
                  className="logo" title="Logo" 
                  alt="Logotype"
                />
                <img 
                  src="images/logotypeMobile.png" 
                  className="logoMobile" 
                  alt="Logotype"
                />
              </a>
              <span>Page title</span>
            </div>

            <div className="header-comp pull-right">

              <div className="dropdown">          
                <a 
                  className="dropdown-toggle" 
                  className="dropdownMenu1" 
                  data-toggle="dropdown" 
                  aria-expanded="true" 
                  href="#">
                  <span>{ this.props.location }</span>
                  <i className="icon-down-open"></i>
                </a>
                <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                  <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Moscow</a></li>
                  <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Minsk</a></li>
                  <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Tokio</a></li>
                  <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Barcelona</a></li>
                </ul>
              </div>

              <a href="#" className="btn btn-sm btn-header">
                <i className="headerIcon icon-bell"></i>
              </a> 
              <a href="#" className="btn btn-sm btn-header"> 
                <i className="headerIcon icon-mail"></i>
              </a> 
              <a href="#" className="profile">
                <span>{ this.props.userName }</span>
                <img src={ this.props.userAvatarUrl } alt="User avatar"/>
              </a>
              <a href="#" className="btn btn-xs btn-header">
                <i className="headerIcon icon-search"></i>
              </a> 

            </div>

          </div>

        </div>

      </header>
    );
  }
}

export default Header;
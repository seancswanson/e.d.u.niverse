import React, { Component } from 'react';
import logo from '../logo.svg';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <Link to="/profile">Profile</Link>
          <Logout updateUser={this.props.updateUser} />
        </span>);
    }
    else {
      links = (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </span>);
    }

    return(
        <div>
          <nav className="nav">
          <div className="div--container__brand">
          <a className="a--brand">E.D.U.niverse</a>
          </div>
            <Link to="/">Home</Link>
            {links}
          </nav>
          <header className="App-header">
          </header>
        </div>
      );
  }
}

export default Nav;

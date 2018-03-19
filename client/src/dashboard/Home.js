import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Home extends Component {
  render(){
  	if(this.props.user && this.props.user.name){
  		return (
        <div>
          Hello
        </div>
      );
  	}
  	else {
  		return (
  			<div>
          <Link to="/signup" className="btn btn-primary btn-signup" >Sign Up</Link  >
          <Link to="/login" className="btn btn-primary btn-login">Log In</Link>
  			</div>
  		);
  	}

  }
}

export default Home;

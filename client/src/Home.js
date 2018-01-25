import React, { Component } from 'react';
import Planner from './Planner.js';

class Home extends Component {
  render(){
  	if(this.props.user && this.props.user.name){
  		return (
        <div>
          <Planner user={this.props.user} />
        </div>
      );
  	}
  	else {
  		return (
  			<div>
          <h3 className="home-title-h">A tool for commuters, astronomers, and lovers.</h3>
          <p className="home-description-p">Calculate if you will arrive at your destination in time for the sunset!</p>
          <a href="/signup" className="btn btn-primary btn-signup" >Sign Up</a>
          <a href="/login" className="btn btn-primary btn-login">Log In</a>
  			</div>
  		);
  	}
 
  }
}

export default Home;

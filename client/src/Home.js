import React, { Component } from 'react';
import Planner from './Planner.js';
import { Link } from 'react-router-dom';

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
          <h3 style="text-transform:uppercase;font-size:25px!important">A tool for commuters, astronomers, and lovers.</h3>
          <p style="font-style:italic; font-size: 20px!important; width:500px; margin: 10px auto!important">Calculate if you will arrive at your destination in time for the sunset!</p>
          <Link to="/signup"><button class="btn btn-primary" style="width:200px!important;padding:10px!important;display:block;margin:10px auto!important;background:lightblue!important;color:black!important;">Sign Up</button></Link>
          <Link to="/login"><button class="btn btn-primary" style="width: 250px!important;padding:10px!important;display:block;margin: 10px auto 40px auto!important;background:lightblue!important;color:black!important;">Log In</button></Link>
  			</div>
  		);
  	}
 
  }
}

export default Home;

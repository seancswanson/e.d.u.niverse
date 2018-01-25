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
  				Welcome!
  			</div>
  		);
  	}
 
  }
}

export default Home;

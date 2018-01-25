import React, { Component } from 'react';
import Planner from './Planner.js';

class Home extends Component {
  render(){
    return (
        <div>
            <Planner user={this.props.user} />
        </div>
      );
  }
}

export default Home;

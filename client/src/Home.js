import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js';
import Map from './Map.js';

class Home extends Component {
  render(){
    return (
        <div>
            <Search />
            <Results />
            <Map />
        </div>
      );
  }
}

export default Home;

import React, { Component } from 'react';
import initMap from './InitMap.js';

class Map extends Component {
    constructor(props){
        super(props)
        this.state = {
            map: ''
        }
    }
    
  render(){
    var mapURL="https://maps.googleapis.com/maps/api/js?key={process.env.local.GOOGLE_MAPS_API}&callback=initMap"

    // if brower support available, ask user for location data and set the map view
      return(
        <div>
            <initMap map={this.props.map}/>
        </div>
      );
  }
}

export default Map;
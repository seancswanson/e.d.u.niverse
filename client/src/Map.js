import React, { Component } from 'react';

class Map extends Component {
    
  render(){
    var mapURL="https://maps.googleapis.com/maps/api/js?key={process.env.local.GOOGLE_MAPS_API}&callback=initMap"

    // if brower support available, ask user for location data and set the map view
      return(
        <div>
            
        </div>
      );
  }
}

export default Map;
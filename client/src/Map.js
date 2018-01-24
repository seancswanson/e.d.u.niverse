import React, { Component } from 'react';

class Map extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
  render(){
    var map = new google.maps.Map({
        center: {lat: -34.397, lng: 150.644},
        zoom: 10
    });

    // if brower support available, ask user for location data and set the map view
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var initialLocation = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
        );
      map.setCenter(initialLocation);
        });
        }
      return(
        <div>{map}</div>
      );
  }
}

export default Map;
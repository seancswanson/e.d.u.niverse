import React from 'react';
import geocoder from 'geocoder';

initMap = (props) => {
    this.props.map = new google.maps.Map({
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(initialLocation);
      });
    }
}

export default initMap;
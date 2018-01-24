import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';

const API_URL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&"

export class MapContainer extends Component {
         constructor(props) {
           super(props);
           this.state = { showingInfoWindow: false, activeMarker: {}, selectedPlace: {}, style: { height: "300px", width: "300px" }, origins: "41.43206,-81.38992|-33.86748,151.20699", destinations: "40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626", results: [] };

           // binding this to event-handler functions
           this.onMarkerClick = this.onMarkerClick.bind(this);
           this.onMapClicked = this.onMapClicked.bind(this);
         }

         getCommute = () => {
           axios
             .get(
               `${API_URL}origins=${
                 this.state.origins
               }&destinations=${
                 this.state.destinations
               }&key=AIzaSyBwHcq2d-eThqq9uo-tVnCr_lDdBk8cCLc`
             )
             .then(({ data }) => {
               //needs curlies around data because axios makes a var called data
              //  this.setState({ results: data.data });
              console.log('axios response',data)
               //data.data because of what the object looked like in the console.log
             });
         };

         onMarkerClick = (props, marker, e) => {
           this.setState({
             selectedPlace: props,
             activeMarker: marker,
             showingInfoWindow: true
           });
         };

         onMapClicked = props => {
           if (this.state.showingInfoWindow) {
             this.setState({
               showingInfoWindow: false,
               activeMarker: null
             });
           }
         };

         render() {
           return <Map style={this.state.style} google={this.props.google} onClick={this.onMapClicked}>
               <Marker onClick={this.onMarkerClick} name={"Current location"} />

               <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                 <div>
                   <h1>{this.state.selectedPlace.name}</h1>
                 </div>
               </InfoWindow>
             </Map>;
         }
       }

export default GoogleApiWrapper({
  apiKey: "AIzaSyBwHcq2d-eThqq9uo-tVnCr_lDdBk8cCLc"
})(MapContainer);
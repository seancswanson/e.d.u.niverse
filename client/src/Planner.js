import React, {Component} from 'react';
import Search from './Search.js';
import Results from './Results.js';
import MapContainer from './MapContainer.js';
import geocoder from 'geocoder';
import axios from 'axios';
import moment from 'moment';

class Planner extends Component {
	constructor(props){
		super(props);
		this.state = {
			locationA: '',
			locationB: '',
			sunsetTime: '',
			lat: '',
            lng: '',
            distance: '',
            distanceResponse: []
		}
	}

	updateLocation = (event) => {
		//Will update location upon change of the text fields
		this.setState({ 
			[event.target.name]: event.target.value
		});
	}

	fetchSunset = (event) => {
		let latitude;
		let longitude;
        let base = this;
        let origin = this.state.locationA

		event.preventDefault();
		console.log("Fetch the sunset time traveling from " + this.state.locationA + " to " + this.state.locationB);

		geocoder.geocode(this.state.locationB, function(err,data){
			latitude = data.results[0].geometry.location.lat;
			longitude = data.results[0].geometry.location.lng;
			console.log(latitude, longitude);
			let sunsetApi = 'https://api.sunrise-sunset.org/json?lat='+latitude+'&lng='+longitude+'&date=today&formatted=0'
			axios.get(`${sunsetApi}`)
				.then(({data}) => {
					console.log(data);
					base.setState({
						lat: latitude,
						lng: longitude,
						sunsetTime: data.results.sunset
					})
					console.log(base.state);
                })
            axios.post('/map',{
                origin: origin,
                latitude: latitude,
                longitude: longitude
            }).then(response => {
                base.setState({distanceResponse: response.data })
            }).catch(err => {
                console.log('backend error we hope', err)
            })
		})
	}

    render(){
        var mapStuff = []
        if(this.state.distanceResponse.length>0){
            console.log('in conditional')
            console.log(this.state.distanceResponse)
            mapStuff.concat(this.state.distanceResponse)
            return mapStuff.map((thing) => {
                <li>{thing}</li>
            })
        }
        return(
        <div className='Planner'>
			<Search user={this.props.user} data={this.state} updateLocation={this.updateLocation} fetchSunset={this.fetchSunset} />
			<Results data={this.state} />
        	<MapContainer />
            <div><ul>{mapStuff}</ul></div>
        </div>
        );
    }
}

export default Planner;


{/* Variables to pass as props: Sunset Time (from sunset API?) */}
{/* Arrival Time (from google)? */}
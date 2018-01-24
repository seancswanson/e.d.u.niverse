import React, {Component} from 'react';
import geocoder from 'geocoder';
import axios from 'axios';
import moment from 'moment';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			locationA: '',
			locationB: '',
			sunsetTime: '',
			lat: '',
			lng: ''
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

		event.preventDefault();
		console.log("Fetch the sunset time traveling from " + this.state.locationA + " to " + this.state.locationB);

		geocoder.geocode(this.state.locationB, function(err,data){
			latitude = data.results[0].geometry.location.lat;
			longitude = data.results[0].geometry.location.lng;
			console.log(latitude, longitude);

			let sunsetApi = 'https://api.sunrise-sunset.org/json?lat='+latitude+'&lng='+longitude+'&date=today'

			axios.get(`${sunsetApi}`)
				.then(({data}) => {
					console.log(data);
					base.setState({
						lat: latitude,
						lng: longitude,
						sunsetTime: data.results.sunset
					})
				})


			// 		axios.get(`${API_URL}?q=${this.state.query}&api_key=0Efg5mlFqEAm66u34MZpWipb4gfAsT6A&limit=25`)
			// .then(({data}) => {
			// 	console.log(data);
			// 	this.setState({
			// 		results: data.data
			// 	})
			// })


			//Axios or fetch for sunset time
			//Return sunset time from API

		})

		// Location A&B must not be null before querying backend
		// Then once we get info back, render these results to change the state
	}

    render(){
        return(
            <div className="search">
            	<form onSubmit={this.fetchSunset}>
            		<label>
            			Where are you now?
            			<input name="locationA" placeholder="Your location" onChange={this.updateLocation} value={this.state.locationA} />
            		</label>
            		<label>
            			Where do you want to see the sunset?
            			<input name="locationB" placeholder="Destination" onChange={this.updateLocation} value={this.state.locationB} />
           			</label>
           			<input type="submit" value="Chase the Sun" />
            	</form>
            	{this.state.lat}
            	{this.state.lng}
            	{this.state.sunsetTime}
            </div>
        );
    }
}

export default Search;
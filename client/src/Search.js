import React, {Component} from 'react';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			locationA: '',
			locationB: ''
		}
	}

	updateLocation = (event) => {
		//Will update location upon change of the text fields
		this.setState({ 
			[event.target.name]: event.target.value
		});
		console.log("Location A: " + this.state.locationA + " Location B: " + this.state.locationB);

	}

	fetchSunset = (event) => {
		event.preventDefault();
		console.log("Fetch the sunset time traveling from " + this.state.locationA + " to " + this.state.locationB);

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
            </div>
        );
    }
}

export default Search;
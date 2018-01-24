import React, {Component} from 'react';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			locationA: '',
			locationB: ''
		}
	}

	updateLocation = () => {
		//Will update location upon change of the text fields
		console.log("Update location");
	}

	fetchSunset = () => {
		console.log("Fetch the sunset time");
		// This will do a post route to the back end
		let locationA = X;

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
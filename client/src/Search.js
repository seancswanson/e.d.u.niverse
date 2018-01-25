import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props);
    }

    saveLocation = (event) => {
        event.preventDefault();
        let location = this.props.data.locationB;
        let user = this.props.user;
        axios.post('/locations', {
          location: location,
          user: user
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
          console.log('error returned', error.response.data);
        });
    }

    render(){
        return(
            <div className="search">
            	<form onSubmit={this.props.fetchSunset}>
            		<label>
            			Where are you now?
            			<input name="locationA" placeholder="Your location" onChange={this.props.updateLocation} value={this.props.data.locationA} />
            		</label>
            		<label>
            			Where do you want to see the sunset?
            			<input name="locationB" placeholder="Destination" onChange={this.props.updateLocation} value={this.props.data.locationB} />
           			</label>
           			<input type="submit" value="Chase the Sun" />
            	</form>
                <input type="submit" value="Save" onClick={this.saveLocation} />
            </div>
        );
    }
}

export default Search;
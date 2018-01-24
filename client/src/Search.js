import React, {Component} from 'react';

class Search extends Component {
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
            </div>
        );
    }
}

export default Search;
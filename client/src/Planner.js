import React, {Component} from 'react';
import Search from './Search.js';
import Results from './Results.js';
import MapContainer from './MapContainer.js';

class Planner extends Component {
    render(){
        return(
        <div className='planner'>
				<Search />
				<Results />
				<MapContainer />
            </div>
        );
    }
}

export default Planner;
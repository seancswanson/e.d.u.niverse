import React, {Component} from 'react';
import Search from './Search.js';
import Results from './Results.js';
import MapContainer from './MapContainer.js';

class Planner extends Component {
    render(){
        return(
        <div className='planner'>
				<Search />
				<Results sunsetTime="SunsetTime state/prop" arrivalTime="Arrival Time" />
        <MapContainer />
        </div>
        );
    }
}

export default Planner;


{/* Variables to pass as props: Sunset Time (from sunset API?) */}
{/* Arrival Time (from google)? */}
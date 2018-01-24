import React, {Component} from 'react';
import Search from './Search.js';
import Results from './Results.js';
import Map from './Map.js';

class Planner extends Component {
    render(){
        return(
        <div className='planner'>
				<Search />
				<Results sunsetTime="SunsetTime state/prop" arrivalTime="Arrival Time" />
				<Map />
        </div>
        );
    }
}

export default Planner;


{/* Variables to pass as props: Sunset Time (from sunset API?) */}
{/* Arrival Time (from google)? */}
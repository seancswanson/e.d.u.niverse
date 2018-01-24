import React, {Component} from 'react';
import Search from './Search.js';
import Results from './Results.js';
import Map from './Map.js';

class Planner extends Component {
    render(){
        return(
            <div className='planner'>
				<Search />
				<Results />
				<Map />
            </div>
        );
    }
}

export default Planner;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Bustout extends Component {
    render(){
        return(
            <div>
                <Link to="/">Back to Dash</Link>
                <h1>Bustout</h1>
            </div>
        )
    }
}

export default Bustout;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Color extends Component {
    render(){
        return(
            <div>
                <Link to="/">Back to Dash</Link>
                <h1>Color</h1>
            </div>
        )
    }
}

export default Color;
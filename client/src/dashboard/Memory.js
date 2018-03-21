import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Memory extends Component {
    render(){
        return(
            <div>
                <Link to="/">Back to Dash</Link>
                <h1>Memory</h1>
            </div>
        )
    }
}

export default Memory;Memory
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Calc extends Component {
    render(){
        return(
            <div>
                <Link to="/">Back to Dash</Link>
                <h1>Calc</h1>
            </div>
        )
    }
}

export default Calc;
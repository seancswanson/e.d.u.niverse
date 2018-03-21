import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Paint extends Component {
    render(){
        return(
            <div>
                <Link to="/">Back to Dash</Link>
                <h1>Paint</h1>
            </div>
        )
    }
}

export default Paint;
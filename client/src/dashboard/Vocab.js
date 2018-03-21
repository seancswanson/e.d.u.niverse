import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Vocab extends Component {
    render(){
        return(
            <div>
                <Link to="/">Back to Dash</Link>
                <h1>Vocab</h1>
            </div>
        )
    }
}

export default Vocab;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Create 6 button links

const AppLinks = () => {
    return(
        <div className="div--gridcontainer__applinks">
            <Link to="/" className="div--grid__appitems"><h2>PAINT</h2></Link>
            <Link to="/" className="div--grid__appitems"><h2>COLOR</h2></Link>
            <Link to="/" className="div--grid__appitems"><h2>VOCAB</h2></Link>
            <Link to="/" className="div--grid__appitems"><h2>BUSTOUT</h2></Link>
            <Link to="/" className="div--grid__appitems"><h2>CALC</h2></Link>
            <Link to="/" className="div--grid__appitems"><h2>MEMORY</h2></Link>
        </div>
)
}



class Dashboard extends Component {
    render(){
        return(
            <div>
                <div class="div--container__dash_title">
                    <h1>This is the Dashboard.</h1>
                    <h3>Pick an activity.</h3>
                </div>
            <AppLinks />
            </div>
        )
    }
}

export default Dashboard;
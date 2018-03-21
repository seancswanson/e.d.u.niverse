import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Create 6 button links

const AppLinks = () => {
    return(
        <div className="div--gridcontainer__applinks">
            <div className="div--grid__appitems"><h1>Hi</h1></div>
        </div>
)
}



class Dashboard extends Component {
    render(){
        return(
            <div>
            <h1>This is the Dashboard.</h1>
            <AppLinks />
            </div>
        )
    }
}

export default Dashboard;
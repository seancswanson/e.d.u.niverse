import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
          locations: ''
        }
    }

    componentDidMount() {
      let user = this.props.user;
      axios.get('/locations', {
        user: user
      }).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('error returned', error.response.data);
      });
    }

  render(){
    if(this.props.user && this.props.user.name){
      return (<div className="Profile">
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
          <p>Locations: {this.state.locations}</p>
        </div>);
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;

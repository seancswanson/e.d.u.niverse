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
      let base = this;
      axios.post('/locations/profile', {
        user: user
      }).then((result) => {

        let myLocations = [];
        result.data.forEach(function(item){ 
          let locationName = item.name;
          myLocations.push(locationName);
          console.log(myLocations);
        })

        base.setState({
          locations: myLocations
        })

      }).catch((error) => {
        console.log('error returned', error.response.data);
      });
    }

  render(){
    if(this.props.user && this.props.user.name){
      return (<div className="Profile">
          <h2>{this.props.user.name}</h2>
          <h4>Your saved sunset locations:</h4>
          <p>Locations: {this.state.locations}</p>
        </div>);
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;

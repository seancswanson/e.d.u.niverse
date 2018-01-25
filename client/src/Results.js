import React, { Component } from 'react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

class Results extends Component {


  render(){
    const sunsetTime = this.props.data.sunsetTime
    var tz = moment.tz.guess();
    var localSunset = moment(sunsetTime).tz(tz).format('h:MM')

    if(localSunset && (localSunset < "5:01")) {
    return(
    <div>
        {console.log(localSunset)}
        {console.log(this.props.data.sunsetTime)}
       <div className="div-sunsettime">
       <h5>Pass in Sunset Time state as prop (from Search to Results)</h5>
      <p className="p--results__sunsettime">The Sun will set at your destination at {localSunset}PM</p>
      </div>

      <div className="div-sunsettime">
      <h5>Pass in Arrival Time state as prop (from Map to Results?)</h5>
      <p className="p--results__commutetime">If you head out now, you will arive at "TIME"</p>
      </div>

      <div className="div-sunsettime">
       <h5>If arrival time is before sunset time, print this</h5>
      <p className="p--results__true">You will make it before the sun has set! :) </p>
     </div>
    </div>
    )
  } 
  else {
      return (<div>Awaiting your request</div>)
    }
  } 
}

export default Results;
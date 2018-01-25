import React, { Component } from 'react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

class Results extends Component {

  render(){
    const sunsetTime = this.props.data.sunsetTime
    var tz = moment.tz.guess();
    var localSunset = moment(sunsetTime).tz(tz).format('h:MM')
    var currentTime = moment().tz(tz).format('h:MM')
    var re = /\d\d?/
    var ore = /(\d\d?)\sh/
    var tre = /(\d\d?)\sm/
    var dist = this.props.distance
    var dur = this.props.duration
    var hours = ore.exec(dur)
    var minutes = tre.exec(dur)
    

    const BeforeSunset = () => {
      return(
      <div className="div-sunsettime">
        <p className="p--results__true">You will make it before the sun has set! :) </p>
      </div>
      )
    }
    const AfterSunset = () => {
      return(
      <div className="div-sunsettime">
        <p className="p--results__false">You will make it after the sun has set! :( </p>
      </div>
      )
    }
    const ResultDiv = () => {
     return <div>
         <div className="div-sunsettime">
           <p className="p--results__sunsettime">
             The Sun will set at your destination at {localSunset}PM
           </p>
         </div>

         <div className="div-sunsettime">
           <p className="p--results__commutetime">
             If you head out now, you will arrive in {this.props.duration} (traveling {this.props.distance})
           </p>
         </div>
       </div>;
    }

    if(sunsetTime && (localSunset < 7)) {
    return(
    <div>
    {console.log('Arriving after Sunset')}
      <ResultDiv />
      <AfterSunset />
    </div>
    )
  } 
   else if (sunsetTime){
    return(
      <div>
        {console.log('Arriving before Sunset')}
        <ResultDiv />
        <BeforeSunset />
      </div>
      )
  }
  else {
    {console.log('Awaiting origin')}
    return (<div>Please Submit Your Origin and Destination Location</div>)
    }
  } 
}

export default Results;
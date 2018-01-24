import React, { Component } from 'react';


class Results extends Component {
  render(){
  return(
    <div>
    
       <div className="div-sunsettime">
       <h5>Pass in Sunset Time state as prop (from Search to Results)</h5>
      <p className="p--results__sunsettime">The Sun will set at your destination at "TIME GOES HERE"</p>
      </div>

      <div className="div-sunsettime">
      <h5>Pass in Arrival Time state as prop (from Map to Results?)</h5>
      <p className="p--results__commutetime">If you head out now, you will arive at "TIME"</p>
      </div>

      <div className="div-sunsettime">
       <h5>If arrival time is before sunset time, print this</h5>
      <p className="p--results__true">You will make it before the sun has set! :) </p>
     </div>

      <div className="div-sunsettime">
       <h5>If arrival time is after sunset time, print this</h5>
      <p className="p--results__false">You will not make it before the sun has set! :( </p>
        </div>

    </div>
    );
  } 
}

export default Results;
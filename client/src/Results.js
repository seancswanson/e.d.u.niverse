import React, { Component } from 'react';


class Results extends Component {
  render(){
  return(
    <div>
      <p className="p--results__sunsettime">The Sun will set at your destination at "TIME GOES HERE"</p>
      <p className="p--results__commutetime">If you head out now, you will arive at "TIME"</p>
      <p className="p--results__true">You will make it before the sun has set! :) </p>
      <p className="p--results__false">You will not make it before the sun has set! :( </p>
    </div>
    );
  } 
}

export default Results;
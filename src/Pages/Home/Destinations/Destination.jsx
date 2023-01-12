import React from 'react';
import Sites from '../../../components/Sites/Sites';
import './Destinations.css';

function Destination() {
  return (
    <div className="destinations__container">
      <span>Choose your Package</span>
      <h1>Select your Best Package for your Travel</h1>
      <Sites />
      <Sites />
    </div>
  );
}

export default Destination;

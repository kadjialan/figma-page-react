import React from 'react';
import Sites from '../../../components/Sites/Sites';
import './Cards.css';

function Cards() {
  return (
    <div className="cards__container">
      <div className="cards__text">
        <span>Choose your Package</span>
        <h1>Select your Best Package for your Travel</h1>
      </div>
      <Sites />
    </div>
  );
}

export default Cards;

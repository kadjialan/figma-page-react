import React from 'react';
import Pionter1 from '../../../asserts/images/left.png';
import Pionter2 from '../../../asserts/images/right.png';
import './Hero.css';

export default function Hero() {
  return (
    <div className="picture">
      <div className="content">
        <h1>Experience The Beauty of Rwanda Whith us</h1>
        <p>Discover the land of thousand hills</p>
      </div>
      <div className="pointers">
        <img src={Pionter1} alt="rignt" />
        <img src={Pionter2} alt="left" />
      </div>
    </div>
  );
}

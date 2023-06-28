import React from 'react';
import './Bg.css';
import Pionter1 from '../../asserts/images/pointer1.png';
import Pionter2 from '../../asserts/images/pointer2.png';

export default function Bg() {
  return (
    <div className="picture">
      <div className="content">
        <h1>Experience The Beauty of Rwanda Whith us</h1>
        <p>Discover the land of thousand hills</p>
        <div className="pointers">
          <img src={Pionter1} alt="rignt" />
          <img src={Pionter2} alt="left" />
        </div>
      </div>
    </div>
  );
}

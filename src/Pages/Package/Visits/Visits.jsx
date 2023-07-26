import React from 'react';
import Sites from '../../../components/Sites/Sites';
import './Visits.css';
import Btn1 from '../../../asserts/images/btn-left.png';
import Btn2 from '../../../asserts/images/btn-right.png';
import Footer from '../../Home/Footer/Footer';

export default function Visits() {
  return (
    <div className="visits">
      <div className="visits__content">
        <div className="cards__text">
          <span>Choose your Package</span>
          <h1>Select your Best Package for your Travel</h1>
        </div>
        <Sites />
        <Sites />
      </div>
      <div className="visits__pointers">
        <img src={Btn1} alt="al" />
        <img src={Btn2} alt="no" />
      </div>
      <Footer />
    </div>
  );
}

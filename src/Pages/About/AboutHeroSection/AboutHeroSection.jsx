import React from 'react';
import StickyBar from '../../../components/StickyBar/StickyBar';
import Monkey from '../../../asserts/images/monkey.png';
import icon from '../../../asserts/images/icon.png';
import './AboutHeroSection.css';

export default function AboutHeroSection() {
  return (
    <div className="aboutHeroSection">
      <img src={Monkey} alt="monkey" className="monkey" />
      <StickyBar />
      <div className="aboutHeroSection__text">
        <h1>We are dedicated to providing the best travel experience.</h1>
        <p className="aboutHeroSection__p">
          Discover the Land of a Thousand Hills
        </p>

        <div className="aboutHeroSection__choice">
          <div className="options">
            <p>Guest</p>
            <h4>
              2 Adult
              <img src={icon} alt="logo" />
            </h4>
          </div>
          <div className="options">
            <p>Date</p>
            <h4>
              12 - 13 April 2021
              <img src={icon} alt="logo" />
            </h4>
          </div>
          <div className="options">
            <p>Package</p>
            <h4>
              Akagery Tour
              <img src={icon} alt="logo" />
            </h4>
          </div>
          <button type="button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

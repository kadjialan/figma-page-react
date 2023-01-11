import React from 'react';
import { Link } from 'react-router-dom';
import Africa from '../../asserts/images/Africa.png';
import Buttons from '../Buttons/Buttons';
import './Searchnav.css';

export default function Searchnav() {
  return (
    <div className="searchbar">
      <div className="menu">
        <img src={Africa} alt="country" />
        <div className="paragraphs">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="about">About</Link>
          </p>
          <p>Tour package</p>
          <p>Gallery</p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>
      </div>
      <Buttons>Sign in</Buttons>
    </div>
  );
}

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
          <p>
            <Link to="tourpackage">Tour package</Link>
          </p>
          <p>
            <Link to="gallery">Gallery</Link>
          </p>
          <p>
            <Link to="blog">Blog</Link>
          </p>
          <p>
            <Link to="contact">Contact us</Link>
          </p>
        </div>
      </div>
      <Buttons>Sign in</Buttons>
    </div>
  );
}

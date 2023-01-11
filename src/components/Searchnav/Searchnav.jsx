import React from 'react';
import Africa from '../../asserts/images/Africa.png';
import './Searchnav.css';

export default function Searchnav() {
  return (
    <div className="searchbar">
      <div className="menu">
        <img src={Africa} alt="country" />
        <div className="paragraphs">
          <p>Home</p>
          <p>About</p>
          <p>Tour package</p>
          <p>Gallery</p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>
      </div>
      <button type="submit">Sign in</button>
    </div>
  );
}

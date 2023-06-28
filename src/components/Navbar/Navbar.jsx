import React from 'react';
import Social from '../../asserts/images/social.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar l">
      <div className="leftpart">
        <span>
          <i className="fa-solid fa-phone-flip" />
          <p>+250 784 688 641</p>
        </span>
        <span>
          <i className="fa-solid fa-envelope" />
          <p>kadjialan7@gmail.com</p>
        </span>
      </div>
      <div className="rightpart">
        <img src={Social} alt="logo" />
      </div>
    </div>
  );
}

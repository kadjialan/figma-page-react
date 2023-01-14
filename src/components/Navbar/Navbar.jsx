import React from 'react';
import Social from '../../asserts/images/social.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="leftpart">
        <span>
          <i className="fa-solid fa-phone-flip" />
          +250 784 688 641
        </span>
        <span>
          <i className="fa-solid fa-envelope" />
          bbonteemma@gmail.com
        </span>
      </div>
      <div className="rightpart">
        <img src={Social} alt="logo" />
      </div>
    </div>
  );
}

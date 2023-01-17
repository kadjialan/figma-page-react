import React from 'react';
import { Link } from 'react-router-dom';
import Africa from '../../asserts/images/Africa.png';
import Buttons from '../Button/Button';
import './StickyBar.css';

export default function StickyBar() {
  return (
    <div className="searchbar">
      <div className="menu">
        <img src={Africa} alt="country" />
        <div className="paragraphs">
          <p>
            <Link to="/" className="paragraphs__link">
              Home
            </Link>
          </p>
          <p>
            <Link to="/about" className="paragraphs__link">
              About
            </Link>
          </p>
          <p>
            <Link to="/tourpackage" className="paragraphs__link">
              Tour package
            </Link>
          </p>
          <p>
            <Link to="/gallery" className="paragraphs__link">
              Gallery
            </Link>
          </p>
          <p>
            <Link to="/not found" className="paragraphs__link">
              Blog
            </Link>
          </p>
          <p>
            <Link to="/contact" className="paragraphs__link">
              Contact us
            </Link>
          </p>
        </div>
      </div>
      <Buttons content="Sign In" />
    </div>
  );
}

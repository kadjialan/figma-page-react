import React from 'react';
import Subhero from '../Subhero/Subhero';
import './Hero3.css';

export default function Hero3({ children }) {
  return (
    <div className="hero3">
      <h1 className="hero3__h1">{children}</h1>
      <Subhero>Gallery</Subhero>
    </div>
  );
}

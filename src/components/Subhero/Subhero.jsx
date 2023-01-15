import React from 'react';
import Play from '../../asserts/images/play.png';
import './Subhero.css';

export default function Subhero({ children }) {
  return (
    <div className="subhero">
      <h2>Home</h2>
      <img src={Play} alt="arrow" />
      <h3>{children}</h3>
    </div>
  );
}

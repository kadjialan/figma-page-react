import React from 'react';
import Play from '../../asserts/images/play.png';
import './Subhero.css';

export default function Subhero({ text }) {
  return (
    <div className="subhero">
      <h2>Home</h2>
      <img src={Play} alt="arrow" />
      <h3>{text}</h3>
    </div>
  );
}

Subhero.defaultProps = {
  text: 'Gallery',
};

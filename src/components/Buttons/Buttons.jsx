import React from 'react';
import './Buttons.css';

export default function Buttons({ children }) {
  return (
    <div>
      <button type="button">{children}</button>
    </div>
  );
}

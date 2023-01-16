import React from 'react';
import './Buttons.css';

export default function Buttons({ content }) {
  return (
    <div>
      <button type="button">{content}</button>
    </div>
  );
}

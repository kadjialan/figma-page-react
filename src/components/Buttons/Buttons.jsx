import React from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';

export default function Buttons({ children }) {
  return (
    <div>
      <button type="button">{children}</button>
    </div>
  );
}

Buttons.propTypes = {
  children: PropTypes.string.isRequired,
};

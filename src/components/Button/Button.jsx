import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Buttons({ content }) {
  return (
    <div>
      <button type="button">{content}</button>
    </div>
  );
}

Buttons.propTypes = {
  content: PropTypes.string.isRequired,
};

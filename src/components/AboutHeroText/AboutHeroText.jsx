import React from 'react';
import PropTypes from 'prop-types';
import Play from '../../asserts/images/play.png';
import './AboutHeroText.css';

export default function AboutHeroText({ title, text }) {
  return (
    <div className="aboutHeroText">
      <h1 className="aboutHeroText__h1">{title}</h1>
      <div className="subhero">
        <h2>Home</h2>
        <img src={Play} alt="arrow" />
        <h3>{text}</h3>
      </div>
    </div>
  );
}

AboutHeroText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
